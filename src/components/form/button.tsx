import type { ComponentProps } from "react";
import animationData from "../../animations/fire-animation.json";
import Lottie from "react-lottie";
import { tv, type VariantProps } from "tailwind-variants";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const buttonStyles = tv({
  base: "pb-2 pt-3 px-3 text-zinc-900 uppercase rounded-md flex items-center justify-center gap-2 cursor-pointer",
  variants: {
    color: {
      primary: "bg-white",
      secondary: "bg-black text-white",
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export const Button = ({ children, color, ...rest }: ButtonProps) => {
  return (
    <button className={buttonStyles({ color })} {...rest}>
      <span className="mt-[-10px]">
        <Lottie options={defaultOptions} isClickToPauseDisabled height={30} />
      </span>
      {children}
    </button>
  );
};
