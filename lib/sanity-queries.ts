import { client } from "@/sanity/lib/client";
import type { Locale } from "@/lib/i18n";

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    title,
    description,
    donationUrl,
    heroVideoUrl,
    "partnerNames": partners[]->name
  }`);
}

export async function getPosts(locale: Locale = "fr", limit = 3) {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...$limit]{
    "title": select(
      $locale == "en" => coalesce(titleEn, title),
      $locale == "pt" => coalesce(titlePt, title),
      title
    ),
    "excerpt": select(
      $locale == "en" => coalesce(excerptEn, excerpt),
      $locale == "pt" => coalesce(excerptPt, excerpt),
      excerpt
    ),
    category,
    publishedAt,
    "slug": slug.current
  }`, { locale, limit });
}

export async function getSanityPrograms(locale: Locale = "fr") {
  return client.fetch(`*[_type == "program"] | order(orderRank asc, title asc){
    "title": select(
      $locale == "en" => coalesce(titleEn, title),
      $locale == "pt" => coalesce(titlePt, title),
      title
    ),
    "excerpt": select(
      $locale == "en" => coalesce(excerptEn, excerpt),
      $locale == "pt" => coalesce(excerptPt, excerpt),
      excerpt
    ),
    "theme": select(
      $locale == "en" => coalesce(themeEn, theme),
      $locale == "pt" => coalesce(themePt, theme),
      theme
    )
  }`, { locale });
}
