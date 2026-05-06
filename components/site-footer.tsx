"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPath, localizePath, stripLocale } from "@/lib/i18n";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);

  if (stripLocale(pathname).startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-kicker">{dict.footer.kicker}</p>
        <h2>{dict.footer.title}</h2>
      </div>
      <div className="footer-links">
        <Link href="/studio">{dict.footer.studio}</Link>
        <Link href={localizePath("/actualites", locale)}>{dict.footer.news}</Link>
        <Link href={localizePath("/faire-un-don", locale)}>{dict.footer.donate}</Link>
      </div>
    </footer>
  );
}
