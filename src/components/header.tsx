import logo from "../assets/logo.png";
import { NAV_BAR_ITEMS } from "../constants/nav-items";
import { Button } from "./form/button";

export const Header = () => {
  return (
    <header className="bg-black px-4 py-2 fixed top-0 left-0 right-0 z-60">
      <div className="w-full flex h-[70px] items-center gap-[100px] max-w-[1440px] mx-auto px-[16px]">
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
        <div className="flex ml-auto gap-4">
          <Button>Quero ser forjado</Button>
        </div>
      </div>
    </header>
  );
};
