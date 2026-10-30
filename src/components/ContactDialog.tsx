import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { track } from "../analytics";
import { site } from "../data";
import { AlertCircleIcon, CloseIcon } from "./icons";
import { focusRing, primaryButton, secondaryButton } from "./styles";

const inputBase =
  "mt-1.5 block w-full rounded-lg border bg-white px-3 py-2 text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:outline-none focus:ring-2";
const inputNormal = "border-zinc-300 focus:border-brand-600 focus:ring-brand-600/20";
const inputInvalid = "border-red-400 focus:border-red-500 focus:ring-red-500/20";
const labelClass = "block text-sm font-medium text-zinc-800";

const fieldNames = ["name", "email", "message"] as const;
type FieldName = (typeof fieldNames)[number];
type FieldErrors = Partial<Record<FieldName, string>>;

type ErrorReason = "network" | "rate-limited" | "unavailable" | "invalid-field";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; reason: ErrorReason; message: string; fieldErrors?: FieldErrors };

const errorMessages = {
  network: "Couldn't connect. Check your internet connection and try again.",
  "rate-limited": "Too many messages were sent recently. Please wait a few minutes and try again.",
  unavailable: "The message service isn't available right now. Please try again in a few minutes.",
};

const failure = (reason: keyof typeof errorMessages): Status => ({
  state: "error",
  reason,
  message: errorMessages[reason],
});

const missingFieldText: Record<FieldName, string> = {
  name: "Please enter your name.",
  email: "Please enter your email address.",
  message: "Please enter a message.",
};

type FormspreeError = { field?: string; code?: string; message?: string };

// The name each field is submitted under. The email input is deliberately not called
// "email": Formspree always format-checks a field with that name, and this one is free text.
const submittedName: Record<FieldName, string> = { name: "name", email: "contact_email", message: "message" };

// Formspree's own wording ("is missing") is written for developers.
function describeFieldError(field: FieldName, code?: string): string {
  if (code === "REQUIRED_FIELD_MISSING" || code === "REQUIRED_FIELD_EMPTY") return missingFieldText[field];
  return "Please check this field.";
}

async function sendMessage(form: HTMLFormElement): Promise<Status> {
  let response: Response;
  try {
    response = await fetch(site.contactFormAction, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
  } catch {
    return failure("network");
  }
  if (response.ok) return { state: "sent" };
  if (response.status === 429) return failure("rate-limited");

  const data: { errors?: FormspreeError[] } | null = await response.json().catch(() => null);
  const fieldErrors: FieldErrors = {};
  for (const error of data?.errors ?? []) {
    const field = fieldNames.find((f) => submittedName[f] === error.field);
    if (field) fieldErrors[field] = describeFieldError(field, error.code);
  }
  const count = Object.keys(fieldErrors).length;
  if (count > 0) {
    return {
      state: "error",
      reason: "invalid-field",
      message: count === 1 ? "Please fix the highlighted field." : "Please fix the highlighted fields.",
      fieldErrors,
    };
  }
  return failure("unavailable");
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
};

// Native <dialog> provides Escape-to-close, focus containment and the backdrop.
export function ContactDialog({ open, onClose }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const doneRef = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      formRef.current?.querySelector<HTMLElement>("#contact-name")?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Runs when the kind of status changes (not when a single field error is cleared),
  // so focus only moves right after a send attempt.
  useEffect(() => {
    if (status.state === "sent") doneRef.current?.focus();
    if (status.state === "error") {
      const firstInvalid = fieldNames.find((field) => status.fieldErrors?.[field]);
      const target = firstInvalid
        ? formRef.current?.querySelector<HTMLElement>(`#contact-${firstInvalid}`)
        : submitRef.current;
      target?.focus();
    }
  }, [status.state]);

  // Every way of closing (Escape, backdrop, buttons) ends here, so the next open starts fresh.
  const handleClose = () => {
    if (status.state !== "sending") setStatus({ state: "idle" });
    onClose();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    const result = await sendMessage(form);
    if (result.state === "sent") {
      form.reset();
      track("contact-sent");
    } else if (result.state === "error") {
      track("contact-error", { reason: result.reason });
    }
    setStatus(result);
  };

  const clearFieldError = (field: FieldName) =>
    setStatus((current) => {
      if (current.state !== "error" || !current.fieldErrors?.[field]) return current;
      const { [field]: _cleared, ...remaining } = current.fieldErrors;
      return Object.keys(remaining).length > 0 ? { ...current, fieldErrors: remaining } : { state: "idle" };
    });

  const sending = status.state === "sending";
  const fieldErrors: FieldErrors = status.state === "error" ? (status.fieldErrors ?? {}) : {};
  const fieldProps = (field: FieldName) => {
    const error = fieldErrors[field];
    return {
      id: `contact-${field}`,
      name: submittedName[field],
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `contact-${field}-error` : undefined,
      onChange: () => clearFieldError(field),
      className: `${inputBase} ${error ? inputInvalid : inputNormal}`,
    };
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      aria-labelledby="contact-title"
      className="w-[calc(100%-2rem)] max-w-lg rounded-2xl bg-white text-zinc-900 shadow-2xl backdrop:bg-zinc-950/40 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="contact-title" className="text-xl font-semibold tracking-tight">
              Contact me
            </h2>
            {status.state !== "sent" && (
              <p className="mt-1 text-sm text-zinc-600">Send me a message using the form below.</p>
            )}
          </div>
          <button
            type="button"
            onClick={handleClose}
            className={`-m-2 rounded-md p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 ${focusRing}`}
          >
            <span className="sr-only">Close</span>
            <CloseIcon className="size-5" />
          </button>
        </div>

        {status.state === "sent" ? (
          <div className="mt-6">
            <div role="status" className="rounded-xl bg-brand-50 p-5">
              <p className="font-medium text-brand-900">Thanks, your message has been sent.</p>
            </div>
            <button ref={doneRef} type="button" onClick={handleClose} className={`mt-6 ${secondaryButton}`}>
              Close
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            action={site.contactFormAction}
            method="POST"
            onSubmit={handleSubmit}
            aria-busy={sending}
            className="mt-6 space-y-4"
          >
            <Field id="contact-name" label="Name" error={fieldErrors.name}>
              <input {...fieldProps("name")} type="text" required autoComplete="name" placeholder="Your name" />
            </Field>
            <Field id="contact-email" label="Email (optional)" error={fieldErrors.email}>
              <input
                {...fieldProps("email")}
                type="text"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="off"
                spellCheck={false}
                placeholder="you@example.com"
              />
            </Field>
            <Field id="contact-message" label="Message" error={fieldErrors.message}>
              <textarea
                {...fieldProps("message")}
                required
                rows={5}
                placeholder="Your message"
                className={`${fieldProps("message").className} resize-y`}
              />
            </Field>

            {status.state === "error" && (
              <div role="alert" className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm">
                <AlertCircleIcon className="mt-0.5 size-4 shrink-0 text-red-600" />
                <div>
                  <p className="font-medium text-red-800">Message not sent</p>
                  <p className="mt-0.5 text-red-700">{status.message}</p>
                </div>
              </div>
            )}
            <button
              ref={submitRef}
              type="submit"
              disabled={sending}
              className={`w-full sm:w-auto ${primaryButton} disabled:cursor-wait disabled:opacity-70`}
            >
              {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
