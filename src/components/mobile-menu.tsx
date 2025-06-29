import { tv, type VariantProps } from "tailwind-variants";

const mobileMenu = tv({
  base: "fixed top-0 left-[-1000px] bg-black/90 backdrop-blur-md w-full h-screen mt-[85px] transition-all md:hidden",
  variants: {
    isOpen: {
      true: "left-0",
    },
  },
});

interface MobileMenuProps extends VariantProps<typeof mobileMenu> {
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={mobileMenu({ isOpen })}>
      <nav>
        <ul className="flex flex-col text-white">
          <li>
            <a
              onClick={onClose}
              href="/"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Início
            </a>
          </li>
          <li>
            <a
              onClick={onClose}
              href="#speakers"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Palestrantes
            </a>
          </li>
          <li>
            <a
              onClick={onClose}
              href="#location"
              className="p-5 text-center border-b border-zinc-200 w-full block"
            >
              Localização
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
