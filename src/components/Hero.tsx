import { site } from "../data";
import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "./icons";
import { Monogram } from "./Monogram";
import { external, primaryButton, secondaryButton } from "./styles";

export function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:pb-24 sm:pt-24">
      <Monogram size="lg" />
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
        {site.name}
      </h1>
      <p className="mt-3 text-lg text-zinc-600 sm:text-xl">
        {site.role} at <span className="font-medium text-zinc-900">{site.company}</span>
      </p>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500">
        <MapPinIcon className="size-4" />
        {site.location}
      </p>
      <p className="mt-6 max-w-xl leading-relaxed text-zinc-600">{site.intro}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={onContact} className={primaryButton}>
          <MailIcon className="size-4" />
          Contact me
        </button>
        <a href={site.resumeUrl} {...external} className={secondaryButton}>
          Resume
          <ArrowUpRightIcon className="size-4 text-zinc-500" />
        </a>
        <a href={site.githubUrl} {...external} className={secondaryButton}>
          GitHub
          <ArrowUpRightIcon className="size-4 text-zinc-500" />
        </a>
      </div>
    </section>
  );
}
