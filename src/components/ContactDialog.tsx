import { useEffect, useRef } from "react";
import { site } from "../data";
import { CloseIcon } from "./icons";
import { focusRing, primaryButton } from "./styles";

const inputClass =
  "mt-1.5 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20";
const labelClass = "block text-sm font-medium text-zinc-800";

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
};

// Native <dialog> provides Escape-to-close, focus containment and the backdrop.
export function ContactDialog({ open, onClose }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      nameRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
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
            <p className="mt-1 text-sm text-zinc-600">Send me a message using the form below.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={`-m-2 rounded-md p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 ${focusRing}`}
          >
            <span className="sr-only">Close</span>
            <CloseIcon className="size-5" />
          </button>
        </div>

        <form action={site.contactFormAction} method="POST" className="mt-6 space-y-4">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Name
            </label>
            <input
              ref={nameRef}
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className={`${inputClass} resize-y`}
            />
          </div>
          <button type="submit" className={`w-full sm:w-auto ${primaryButton}`}>
            Send message
          </button>
        </form>
      </div>
    </dialog>
  );
}
