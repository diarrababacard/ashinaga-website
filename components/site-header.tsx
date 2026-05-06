"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const aboutLinks = [
  { href: "/a-propos/notre-histoire", label: "Notre histoire" },
  { href: "/a-propos/notre-equipe", label: "Notre equipe" },
  { href: "/a-propos/ressources-partenaires", label: "Ressources et partenaires" },
];

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos", children: aboutLinks },
  { href: "/nos-programmes", label: "Nos programmes" },
  { href: "/notre-impact", label: "Notre impact" },
  { href: "/actualites", label: "Actualites/blog" },
];

export function SiteHeader() {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" aria-label="Ashinaga Senegal - Accueil">
        <span className="brand-roundel">A</span>
        <span>
          <strong>Ashinaga</strong>
          <small>Senegal</small>
        </span>
      </Link>

      <nav className="main-nav" aria-label="Navigation principale">
        {links.map((link) =>
          link.children ? (
            <div className="nav-group" key={link.href}>
              <Link href={link.href}>{link.label}</Link>
              <div className="nav-menu">
                {link.children.map((child) => (
                  <Link key={child.href} href={child.href}>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ),
        )}
      </nav>

      <Link href="/faire-un-don" className="donate-link">
        <span className="donate-full">Faire un don</span>
        <span className="donate-short">Don</span>
      </Link>
    </header>
  );
}
