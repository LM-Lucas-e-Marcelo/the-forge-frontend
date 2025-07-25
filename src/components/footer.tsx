import logo from "../assets/logo.png";
import { Sponsors } from "./sponsors";
export const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-black to-zinc-900  border-t border-zinc-700">
      <div className="w-full flex flex-col gap-4 pt-10 items-center justify-center">
        <h1 className="text-white text-lg mb-[-50px] sm:ml-[-400px]">Apoio:</h1>
        <Sponsors />
      </div>
      <div className="p-10 text-white">
        <img src={logo} alt="A Forja" width={200} />
        <p>
          Rua Firenze Business Park - Av. do Comércio, 965 - Pacheco, Palhoça -
          SC, 88134-852
        </p>
        <p>CNPJ: 53.470.516/0001-66</p>
        <p>Telefone: 11 97442-1689</p>
        <p>Todos os direitos reservados a Forja 2025.</p>
      </div>
    </div>
  );
};
