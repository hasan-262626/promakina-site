import type { Metadata } from "next";
import MachinesIndexPage from "../makinalar-ekipman/page";

export const metadata: Metadata = {
  title: "Makinalar | Pro Makina",
  description:
    "Tambur sistemleri, konveyör sistemleri, helezonlar, elevatörler, kırıcılar, elekler ve proses ekipmanları.",
  alternates: {
    canonical: "https://www.promakina.com.tr/makinalar",
  },
};

export default function Page() {
  return <MachinesIndexPage />;
}
