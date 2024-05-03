import AboutCounter from "./components/AboutCounter";
import AboutHero from "./components/AboutHero";
import WhyUs from "./components/WhyUs";

export const metadata = {
  title: "About Us",
  description: "About Us description"
}

const page = () => {
  return (
    <>
      <AboutHero />
      <AboutCounter />
      <WhyUs />
    </>
  );
};

export default page;
