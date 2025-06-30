import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { tv } from "tailwind-variants";
import logo from "../assets/logo.png";
import { NAV_BAR_ITEMS } from "../constants/nav-items";
import { Button } from "./form/button";
import { MobileMenu } from "./mobile-menu";
import { FinishModal } from "./finish-modal";

const header = tv({
  base: "fixed top-0 left-0 right-0 z-60 transition-all px-4",
  variants: {
    scrolled: {
      true: "  py-2",
      false: "pt-2 sm:pt-10 pb-2",
    },
    isOpen: {
      true: "bg-black/90 backdrop-blur-md",
    },
  },
});

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleToggleModal = () => setOpenModal((prevState) => !prevState);

  const handleToggleMobileMenu = () =>
    setOpenMobileMenu((prevState) => !prevState);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRedirectToTickets = () => {
    handleToggleModal();
    window.open(
      "https://www.sympla.com.br/evento/a-forja-2025/2983812",
      "_blank"
    );
  };

  return (
    <header
      className={header({ scrolled: isScrolled, isOpen: openMobileMenu })}
    >
      <div className="w-full flex h-[70px] items-center gap-[100px] mx-auto px-[16px]">
        <a href="/">
          <img src={logo} alt="Logo" width={150} />
        </a>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-lg">
            {Object.entries(NAV_BAR_ITEMS).map(([key, value]) => (
              <li className="text-white hover:underline" key={key}>
                <a href={value.link}>{key}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex ml-auto">
          {openMobileMenu ? (
            <button
              onClick={handleToggleMobileMenu}
              className="text-red-500 md:hidden"
            >
              <FiX size={30} />
            </button>
          ) : (
            <button onClick={handleToggleMobileMenu} className="md:hidden">
              <RxHamburgerMenu size={24} className="text-white" />
            </button>
          )}
          <Button onClick={handleRedirectToTickets}>Quero ser forjado</Button>
        </div>
      </div>
      <MobileMenu isOpen={openMobileMenu} onClose={handleToggleMobileMenu} />
      <FinishModal isOpen={openModal} onClose={handleToggleModal} />
    </header>
  );
};
