import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const machineAliasMap: Record<string, string> = {
  "tambur-sistemleri": "/makinalar/tambur-sistemleri",
  "tasima-sistemleri": "/makinalar/tasima-ekipmanlari",
  "eleme-ve-siniflandirma-sistemleri": "/makinalar/eleme-ve-siniflandirma-sistemleri",
  "kiricilar-ve-parcalayicilar": "/makinalar/kiricilar-ve-parcalayicilar",
  "reaktorler-ve-tanklar": "/makinalar/reaktorler-ve-tanklar",
  "toz-toplama-sistemleri": "/makinalar/toz-toplama-sistemleri",
  "paketleme-ve-dolum-sistemleri": "/makinalar/paketleme-ve-dolum-sistemleri",
  "depolama-sistemleri": "/makinalar/depolama-ve-besleme-sistemleri",
};

export function generateStaticParams() {
  return Object.keys(machineAliasMap).map((slug) => ({ slug }));
}

export default async function MachineEquipmentAliasDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const target = machineAliasMap[slug];

  redirect(target ?? "/makinalar-ekipman");
}
