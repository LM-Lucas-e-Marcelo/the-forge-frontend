import type { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button className="px-3 pt-3 pb-2 bg-primary text-white uppercase rounded-md flex items-center justify-center">
      {children}
    </button>
  );
};
