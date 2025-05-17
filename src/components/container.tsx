import type { PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const containerStyles = tv({
  base: "relative",
  variants: {
    invert: {
      true: "bg-gradient-to-b from-black to-primary",
      false: "bg-gradient-to-b from-primary to-black",
    },
    withoutPadding: {
      true: "p-0",
      false: "p-10",
    },
  },

  defaultVariants: {
    invert: false,
    withoutPadding: false,
  },
});

type ContainerProps = VariantProps<typeof containerStyles> & PropsWithChildren;

export const Container = ({
  children,
  invert,
  withoutPadding,
}: ContainerProps) => {
  return (
    <div className={containerStyles({ invert, withoutPadding })}>
      <div className="max-w-[1440px] mx-auto w-full">{children}</div>
    </div>
  );
};
