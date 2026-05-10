import Feature from "@/components/Feature/Feature";
import Hero from "@/components/Hero";
import HighLight from "@/components/highlights/highlight";
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
      <Feature />
      <HighLight />
    </>
  );
}
