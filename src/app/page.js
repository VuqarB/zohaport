import Adverts from "@/components/Adverts";
import Blog from "@/components/Blog";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LetsTalk from "@/components/LetsTalk";
import Logistic from "@/components/Logistic";
import RequestQuote from "@/components/RequestQuote";
import Services from "@/components/Services";
import Sponsors from "@/components/Sponsors";
import Testimonals from "@/components/Testimonals";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <Features />
      <Services />  
      <Logistic />
      <Adverts />
      <RequestQuote />
      <Testimonals />
      <LetsTalk />
      <Blog />
    </>
  );
}
