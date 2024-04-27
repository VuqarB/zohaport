const Input = ({ type, placeholder, registerName, register }) => {
  return (
    <input
      className="w-full h-[40px] xs:h-[42px] md:h-[56px] py-[18px] pl-[10px] md:pl-[16px] cLg:pl-[25px] border border-[#ededed] text-[13px] xs:text-[14px] md:text-[16px] leading-[18px] xs:leading-[19px] text-[#333] transition-all duration-200 ease-linear focus:border-[#3898EC] outline-0"
      placeholder={placeholder}
      type={type}
      {...register(registerName)}
    />
  );
};

export default Input;
