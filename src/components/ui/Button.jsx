import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Button = ({
  icon,
  color,
  transparent,
  className,
  text,
  href,
  onClick,
  padding,
}) => {
  const classes = `${"text-[13px] xs:text-[15px] md:text-[18px]"} leading-[23px] xs:leading-[25px] md:leading-[28px] ${
    color ? "text-[#050505]" : "text-white"
  } font-medium text-center capitalize whitespace-nowrap ${
    padding || "py-[9px] px-[20px] md:py-[13px] md:px-[37px]"
  } ${
    transparent ? "bg-transparent" : "bg-[#e54530]"
  } outline-none ${className} flex-inline items-center gap-[13px] flex-grow-0 flex-shrink-0 transition-all duration-300 ease-linear button-hover`;

  const renderIcon = () => (
    <ArrowRightAltIcon className="button-icon pl-[5px]" />
  );

  const renderBtn = () => (
    <button className={classes} onClick={onClick}>
      <span>{text}</span>
      {icon && renderIcon()}
    </button>
  );

  const renderLink = () => (
    <Link href={href} className={classes} onClick={onClick}>
      <span>{text}</span>
      {icon && renderIcon()}
    </Link>
  );

  return href ? renderLink() : renderBtn();
};

export default Button;
