import { IoIosArrowDown } from "react-icons/io";
import { tv, type VariantProps } from "tailwind-variants";

const trailCardContent = tv({
  base: "w-full p-3 bg-orange-100 overflow-hidden max-h-[0px] p-0 transition-all duration-300 text-left text-lg",
  slots: {
    header: "flex justify-between bg-orange-100 p-5 font-tertiary",
    icon: "bg-black rounded-full p-1 text-white shrink-0 ml-4 sm:ml-0",
  },
  variants: {
    isOpen: {
      true: {
        base: "max-h-[500px] p-3",
        icon: "rotate-180 transition-all duration-300",
      },
    },
  },
});

type CardVarians = VariantProps<typeof trailCardContent>;

interface TrailCardProps extends CardVarians {
  title: string;
  description: string;
}

const { base, header, icon } = trailCardContent();
export const TrailCard = ({ title, isOpen, description }: TrailCardProps) => {
  return (
    <div className="h-full">
      <header className={header({ isOpen })}>
        <span className="text-lg text-secondary">{title}</span>{" "}
        <IoIosArrowDown size={30} className={icon({ isOpen })} />
      </header>
      <div
        className={base({ isOpen })}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
