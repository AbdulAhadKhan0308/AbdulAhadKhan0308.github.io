import { track } from "../analytics";
import { site } from "../data";
import { external, focusRing } from "./styles";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={site.toptalUrl}
            {...external}
            onClick={() => track("toptal-click", { location: "footer" })}
            className={`rounded-md transition hover:text-zinc-900 ${focusRing}`}
          >
            Available on Toptal
          </a>
          <a
            href="#top"
            className={`rounded-md transition hover:text-zinc-900 ${focusRing}`}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
