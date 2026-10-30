import { useEffect, useState } from "react";
import type { ContactSource } from "../analytics";
import { site } from "../data";
import { CloseIcon, MenuIcon } from "./icons";
import { Monogram } from "./Monogram";
import { focusRing, primaryButton } from "./styles";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#links", label: "Profiles" },
];

export function Header({ onContact }: { onContact: (source: ContactSource) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const openContact = () => {
    setMenuOpen(false);
    onContact("menu");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className={`-m-1 flex items-center gap-2.5 rounded-lg p-1 font-semibold tracking-tight text-zinc-900 ${focusRing}`}
        >
          <Monogram size="sm" />
          {site.name}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 ${focusRing}`}
            >
              {item.label}
            </a>
          ))}
          <button type="button" onClick={() => onContact("header")} className={`ml-3 ${primaryButton} py-2`}>
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={`-mr-2 rounded-md p-2 text-zinc-700 transition hover:bg-zinc-100 md:hidden ${focusRing}`}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        className={menuOpen ? "border-t border-zinc-200 md:hidden" : "hidden"}
      >
        <ul className="mx-auto max-w-5xl space-y-1 px-4 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-md px-3 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900 ${focusRing}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button type="button" onClick={openContact} className={`w-full ${primaryButton}`}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
