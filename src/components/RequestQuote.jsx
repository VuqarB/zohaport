import SectionTitle from "./SectionTitle";
import Input from "./ui/Input";
import Section from "./ui/Section";
import Image from "next/image";
import Select from "./ui/Select";
import Button from "./ui/Button";

const RequestQuote = () => {
  return (
    <Section className="max-container" padding="p-0">
      <div className="flex flex-col cLg:flex-row gap-[70px]">
        <div className="flex-1 relative">
          <div className="relative left-0 cLg:left-[30px] mb-[30px] cLg:mb-0 overflow-hidden">
            <Image
              src="/request-quote-img.png"
              className="w-full cLg:w-auto"
              width={474}
              height={698}
              alt="request-qoute-img"
            />
          </div>
          <div className="absolute top-[-33px] cLg:top-[-29px] left-0 z-[-1] w-[53%] h-[103%] cLg:h-[106%] quote-b" />
        </div>

        <div className="flex-[1.2]">
          <SectionTitle subtitle="request quote" start margin="mb-0" />
          <div className="overflow-hidden mb-[45px]">
            <h2 className="text-[20px] xs:text-[34px] md:text-[40px] cLg:text-[48px] leading-[30px] xs:leading-[44px] md:leading-[50px] cLg:leading-[58px] font-semibold">
              Request a Quote
            </h2>
          </div>

          <div className="mb-[15px]">
            <form className="flex flex-col gap-[16px] xs:gap-[24px] cLg:gap-[28px]">
              <div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-0 font-general-sans text-[#050505] text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] font-medium"
                  >
                    Personal Data
                  </label>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-5">
                  <Input type="text" placeholder="Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone" />
                  <Input type="text" placeholder="Address" />
                </div>
              </div>
              <div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-0 font-general-sans text-[#050505] text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] font-medium"
                  >
                    Shipment Data
                  </label>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-5">
                  <Select
                    defaultOption="Sea Fright"
                    options={[
                      { value: "sea-fright-1", name: "Sea Fright" },
                      { value: "sea-fright-2", name: "Sea Fright" },
                    ]}
                  />
                  <Select
                    defaultOption="Incotems"
                    options={[
                      { value: "incomets-1", name: "Incomets" },
                      { value: "incomets-2", name: "Incomets" },
                    ]}
                  />
                  <Input type="text" placeholder="Delivery City" />
                  <Input type="text" placeholder="City of Departure" />
                  <Input type="text" placeholder="Width" />
                  <Input type="text" placeholder="Lenght" />
                </div>
              </div>
              <div>
                <Button text="send now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RequestQuote;
