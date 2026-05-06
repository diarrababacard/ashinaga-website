"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">Ashinaga Senegal</p>
        <h2>Soutien et education pour les etudiants orphelins a travers le monde.</h2>
      </div>
      <div className="footer-links">
        <Link href="/studio">Espace edition</Link>
        <Link href="/actualites">Actualites</Link>
        <Link href="/faire-un-don">Faire un don</Link>
      </div>
    </footer>
  );
}
