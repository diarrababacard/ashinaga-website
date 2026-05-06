import { NewsPage } from "@/components/localized-pages";

export const revalidate = 60;

export default function Page() {
  return <NewsPage locale="fr" />;
}
