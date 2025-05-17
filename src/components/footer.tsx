import logo from "../assets/logo.png";
export const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-black to-zinc-900  border-t border-zinc-700">
      <div className="w-full flex flex-col gap-4 pt-10 items-center justify-center">
        <h1 className="text-white text-5xl font-tertiary">Patrocinadores</h1>
        <div className="flex gap-4">
          <img src={logo} alt="name" width={100} />
          <img src={logo} alt="name" width={100} />
          <img src={logo} alt="name" width={100} />
          <img src={logo} alt="name" width={100} />
          <img src={logo} alt="name" width={100} />
          <img src={logo} alt="name" width={100} />
          <img src={logo} alt="name" width={100} />
        </div>
      </div>
      <div className="p-10 text-white">
        <img src={logo} alt="A Forja" width={200} />
        <p>
          Rua Firenze Business Park - Av. do Comércio, 965 - Pacheco, Palhoça -
          SC, 88134-852
        </p>
        <p>CNPJ: 99.999.999/0001-99</p>
        <p>48 99999-9999 / contato@aforja.com.br</p>
        <p>Todos os direitos reservados a Forja 2025.</p>
      </div>
    </div>
  );
};
