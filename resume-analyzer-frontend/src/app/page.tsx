import React from "react";
import { LandingPlugins } from "@/components/landing_page_section";

export default function Home() {
  return (
    <>
      {
        LandingPlugins
        .filter(p => p.enabled)
        .sort((a, b)=> a.order - b.order)
        .map(p => (
          <p.component key={p.id} />
        ))
      }
    </>
  );
}


