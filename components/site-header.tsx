"use client";

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
      <Link href={localizePath("/", locale)} className="brand-mark" aria-label="Ashinaga Senegal">
        <span className="brand-roundel">A</span>
        <span>
          <strong>Ashinaga</strong>
          <small>Senegal</small>
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
          <span className="heart-icon" aria-hidden="true" />
          <span className="donate-full">{dict.nav.donate}</span>
          <span className="donate-short">{dict.nav.donateShort}</span>
        </Link>
      </div>
    </header>
  );
}
