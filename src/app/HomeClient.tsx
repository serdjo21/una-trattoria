"use client";

import { useRef } from "react";

function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={galleryRef}>
      {/* ... */}
    </section>
  );
}

export default function HomeClient() {
  return (
    <main>
      {/* ... */}
      <Gallery />
    </main>
  );
}
