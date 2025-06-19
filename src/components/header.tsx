import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import logo from "../assets/logo.png";
import { NAV_BAR_ITEMS } from "../constants/nav-items";
import { Button } from "./form/button";

const header = tv({
  base: "fixed top-0 left-0 right-0 z-60 transition-all px-4",
  variants: {
    scrolled: {
      true: "bg-black/70 backdrop-blur-md py-2",
      false: "pt-10 pb-2",
    },
  },
});

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRedirectToTickets = () => {
    window.open(
      "https://www.sympla.com.br/evento/a-forja-2025/2983812",
      "_self"
    );
  };

  return (
    <header className={header({ scrolled: isScrolled })}>
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
          <Button onClick={handleRedirectToTickets}>Quero ser forjado</Button>
        </div>
      </div>
    </header>
  );
};
