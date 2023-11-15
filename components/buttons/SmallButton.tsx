import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const SmallButton = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter  px-1 py-1 font-semibold text-xs  text-white bg-blue-800   hover:bg-blue-700     rounded inline-flex items-center ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && <Image className="ml-5" src={icon} alt={title} width={20} height={20} />}
      <label className="bold-14 mx-5 my-2 whitespace-nowrap cursor-pointer text-white">
        {title}
      </label>
    </button>
  );
};

export default SmallButton;
