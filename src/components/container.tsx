import type { PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const containerStyles = tv({
  base: "max-w-[1440px] bg-red-500 mx-auto p-10 relative",
  variants: {
    invert: {
      true: "bg-gradient-to-b from-black to-primary",
      false: "bg-gradient-to-b from-primary to-black",
    },
  },

  defaultVariants: {
    invert: false,
  },
});

type ContainerProps = VariantProps<typeof containerStyles> & PropsWithChildren;

export const Container = ({ children, invert }: ContainerProps) => {
  return (
    <div className="w-full px-[16px] bg-black">
      <div className={containerStyles({ invert })}>{children}</div>
    </div>
  );
};
