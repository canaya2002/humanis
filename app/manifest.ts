import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Humanis — Agencia de Colocación de Personal",
    short_name: "Humanis",
    description: "Agencia de colocación de personal en México.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#0e7490",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
