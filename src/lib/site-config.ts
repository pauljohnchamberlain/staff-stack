export const siteConfig = {
  name: "Staff Stack",
  url: "https://staffstack.co",
  ogImage: "https://staffstack.co/og-image.jpg",
  description:
    "Staff Stack provides AI-native certified operators for agencies. StackCertified operators tested on real work, ready in 7 days.",
  phone: "+63 2 8791 7462",
  email: "support@staffstack.co",
} as const;

export function getCanonicalUrl(path = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath === "/" ? "" : cleanPath}`;
}
