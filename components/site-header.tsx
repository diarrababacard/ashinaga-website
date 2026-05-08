"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getDictionary,
  getLocaleFromPath,
  languageNames,
  localizePath,
  locales,
  stripLocale,
} from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const cleanPath = stripLocale(pathname);

  if (cleanPath.startsWith("/studio")) {
    return null;
  }

  const aboutLinks = [
    { href: "/a-propos/notre-histoire", label: dict.nav.history },
    { href: "/a-propos/notre-equipe", label: dict.nav.team },
    { href: "/a-propos/ressources-partenaires", label: dict.nav.resources },
  ];

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/a-propos", label: dict.nav.about, children: aboutLinks },
    { href: "/nos-programmes", label: dict.nav.programs },
    { href: "/notre-impact", label: dict.nav.impact },
    { href: "/actualites", label: dict.nav.news },
  ];

  return (
    <header className="site-header">
      <Link
        href={localizePath("/", locale)}
        className="brand-mark"
        aria-label="Retour à l'accueil — Ashinaga Sénégal"
      >
        <span className="brand-logo-slot">
          <Image
            src="/brand/logo-navbar.png"
            alt=""
            width={260}
            height={56}
            className="brand-logo brand-logo-transparent-bg"
            priority
            sizes="(max-width: 760px) min(180px, 48vw), 260px"
          />
        </span>
      </Link>

      <nav className="main-nav" aria-label={dict.nav.aria}>
        {links.map((link) =>
          link.children ? (
            <div className="nav-group" key={link.href}>
              <Link href={localizePath(link.href, locale)}>{link.label}</Link>
              <div className="nav-menu">
                {link.children.map((child) => (
                  <Link key={child.href} href={localizePath(child.href, locale)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={link.href} href={localizePath(link.href, locale)}>
              {link.label}
            </Link>
          ),
        )}
      </nav>

      <div className="header-actions">
        <div className="language-switcher" aria-label="Language">
          {locales.map((targetLocale) => (
            <Link
              key={targetLocale}
              href={localizePath(cleanPath, targetLocale)}
              aria-current={targetLocale === locale ? "page" : undefined}
            >
              {languageNames[targetLocale]}
            </Link>
          ))}
        </div>
        <Link href={localizePath("/faire-un-don", locale)} className="donate-link">
          <svg className="donate-link__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="donate-full">{dict.nav.donate}</span>
          <span className="donate-short">{dict.nav.donateShort}</span>
        </Link>
      </div>
    </header>
  );
}
