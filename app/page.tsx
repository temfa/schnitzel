import About from "@/components/about ";
import Banner from "@/components/banner";
import Call from "@/components/call";
import Counter from "@/components/counter";
import Menu from "@/components/menu";
import Opening from "@/components/opening";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Opening />
      <Counter />
      <Menu />
      <Call />
      <Gallery />
    </>
  );
}
