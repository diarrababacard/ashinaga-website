import { client } from "@/sanity/lib/client";

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    title,
    description,
    donationUrl,
    heroVideoUrl,
    "partnerNames": partners[]->name
  }`);
}

export async function getPosts(limit = 3) {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...$limit]{
    title,
    excerpt,
    category,
    publishedAt,
    "slug": slug.current
  }`, { limit });
}

export async function getSanityPrograms() {
  return client.fetch(`*[_type == "program"] | order(orderRank asc, title asc){
    title,
    excerpt,
    theme
  }`);
}
