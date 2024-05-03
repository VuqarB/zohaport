import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed z-[100] transition-all duration-700 ease-linear h-full w-full bg-[#101010]">
      <div className="flex flex-center w-full h-full">
        <Image
          src="/footer-logo.svg"
          width={170}
          height={50}
          alt="loading-icon"
        />
      </div>
    </div>
  );
};

export default Loading;
