export type Variant = "a" | "b" | "c";

export function resolveVariant(v: string | string[] | undefined): Variant {
  const raw = Array.isArray(v) ? v[0] : v;
  if (raw === "b" || raw === "c") return raw;
  return "a";
}

export interface VariantTheme {
  label: string;
  bg: string;
  accent: string;
  blob1: string;
  blob2: string;
  editorial: boolean;
}

export const VARIANTS: Record<Variant, VariantTheme> = {
  a: {
    label: "Sage (Calm)",
    bg: "bg-[#FFFCF8]",
    accent: "#6B7F6E",
    blob1: "#E6DDD3",
    blob2: "#F2D6C8",
    editorial: false,
  },
  b: {
    label: "Editorial (Serif)",
    bg: "bg-[#FCFAF6]",
    accent: "#2D2A26",
    blob1: "#E6E1D8",
    blob2: "#E2D9CC",
    editorial: true,
  },
  c: {
    label: "Warm (Peach)",
    bg: "bg-[#FFF1E6]",
    accent: "#C17C60",
    blob1: "#F7D9C8",
    blob2: "#F2C7B4",
    editorial: false,
  },
};
