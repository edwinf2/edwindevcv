import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Hosts que pueden cargar recursos de desarrollo (HMR, etc.) cuando accedes
  // al dev server desde otra máquina/LAN. Solo afecta a `next dev`.
  allowedDevOrigins: ["192.168.0.6"],
};

export default withNextIntl(nextConfig);
