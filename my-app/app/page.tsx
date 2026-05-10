import Hero from "@/components/Hero";
import Perfomance from "@/components/perfomance/Perfomance";
import ProductView from "@/components/ProductView";
import ShowCase from "@/components/showcase/ShowCase";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductView />
      <ShowCase />
      <Perfomance />
    </>
  );
}
