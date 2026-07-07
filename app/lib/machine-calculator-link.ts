type CalculatorFamily =
  | "drum"
  | "transport"
  | "crusher"
  | "reactor"
  | "screening"
  | "dust"
  | "packaging"
  | "storage"
  | "auxiliary"
  | "dosage";

type MachineCalculatorLinkOptions = {
  family?: CalculatorFamily;
  title?: string;
  isIndex?: boolean;
};

function normalizeMachineTitle(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .replaceAll("İ", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

export function getMachineCalculatorHref({
  family,
  title,
  isIndex = false,
}: MachineCalculatorLinkOptions) {
  if (isIndex || !family) {
    return "/programlar";
  }

  const normalizedTitle = title ? normalizeMachineTitle(title) : "";

  if (family === "drum") {
    return "/programlar?modal=tambur-kapasite-hesabi";
  }

  if (family === "transport") {
    if (normalizedTitle.includes("helezon")) {
      return "/programlar/helezon-kapasite-hesabi";
    }

    if (normalizedTitle.includes("elevator")) {
      return "/programlar/elevator-kapasite-hesabi";
    }

    if (
      normalizedTitle.includes("konveyor") ||
      normalizedTitle.includes("tripper")
    ) {
      return "/programlar/konveyor-kapasite-hesabi";
    }

    return "/programlar";
  }

  return "/programlar";
}

export function getMachineCalculatorTitle({
  family,
  title,
}: Omit<MachineCalculatorLinkOptions, "isIndex">) {
  if (!family || !title) {
    return "Kapasite Hesabı";
  }

  const normalizedTitle = normalizeMachineTitle(title);

  if (family === "drum") {
    return `${title} Hesabı`;
  }

  if (family === "transport") {
    if (normalizedTitle.includes("helezon")) {
      return "Vidalı Helezon Kapasite Hesabı";
    }

    if (normalizedTitle.includes("elevator")) {
      return "Elevatör Kapasite Hesabı";
    }

    if (normalizedTitle.includes("konveyor") || normalizedTitle.includes("tripper")) {
      return `${title} Kapasite Hesabı`;
    }
  }

  return `${title} Kapasite Hesabı`;
}
