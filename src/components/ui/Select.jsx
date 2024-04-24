const Select = ({ defaultOption, options }) => {

  return (
    <select className="w-full h-[40px] xs:h-[42px] md:h-[56px] px-2.5 md:px-4 cLg:px-[25px] border border-[#ededed] transition-all duration-200 ease-linear outline-0 text-[13px] xs:text-[14px] md:text-[16px] leading-[18px] xs:leading-[19px] text-[#333]">
      <option value={defaultOption}>{defaultOption}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
