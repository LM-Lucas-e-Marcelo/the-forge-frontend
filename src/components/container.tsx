import type { PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const containerStyles = tv({
  base: "max-w-[1440px] bg-red-500 mx-auto p-10 relative",
  variants: {
    invert: {
      true: "bg-gradient-to-b from-black to-primary",
      false: "bg-gradient-to-b from-primary to-black",
    },
    withoutPadding: {
      true: "px-0",
      false: "px-10",
    },
  },

  defaultVariants: {
    invert: false,
    withoutPadding: false,
  },
});

type ContainerProps = VariantProps<typeof containerStyles> & PropsWithChildren;

export const Container = ({ children, invert }: ContainerProps) => {
  return (
    <div className="w-fullbg-black">
      <div className={containerStyles({ invert })}>{children}</div>
    </div>
  );
};
