"use client";

import { useEffect, useState } from "react";

import Feature from "@/components/Feature/Feature";
import Hero from "@/components/Hero";
import HighLight from "@/components/Highlight/HighLigh";
import Perfomance from "@/components/perfomance/Perfomance";
import ProductView from "@/components/ProductView";
import ShowCase from "@/components/showcase/ShowCase";
import Loader from "@/components/Loader";

export default function MainLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <main
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero />
        <ProductView />
        <ShowCase />
        <Perfomance />
        <Feature />
        <HighLight />
      </main>
    </>
  );
}