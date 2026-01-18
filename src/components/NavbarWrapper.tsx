"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => import("@/components/Navbar").then((mod) => ({ default: mod.Navbar })),
  {
    ssr: false,
    loading: () => (
      <header className="sticky top-0 z-40 w-full h-14 border-b border-border/50 bg-background/95 backdrop-blur-md" />
    ),
  }
);

export function NavbarWrapper() {
  return <Navbar />;
}
