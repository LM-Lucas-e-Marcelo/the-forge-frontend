import type { ComponentProps } from "react";

export const Input = (props: ComponentProps<"input">) => {
  return (
    <input
      type="text"
      className="px-4 py-3 bg-white rounded-md placeholder:zinc-400 border border-primary"
      {...props}
    />
  );
};
