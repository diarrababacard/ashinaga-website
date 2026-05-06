import { HomePage } from "@/components/localized-pages";

export const revalidate = 60;

export default function Page() {
  return <HomePage locale="fr" />;
}
