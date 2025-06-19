export const Tickets = () => {
  const handleNavigate = () => {
    window.open(
      "https://www.sympla.com.br/evento/a-forja-2025/2983812",
      "_self"
    );
  };
  return (
    <div className="fixed bottom-2 left-[50%] transform -translate-x-1/2 w-[500px] flex gap-5 justify-between p-4 rounded-2xl backdrop-blur bg-zinc-500/40 z-50">
      <section className="text-white">
        <p className="text-2xl">R$ 129,00</p>
        <p>LOTE 1 DISPONÍVEL</p>
      </section>
      <div
        role="button"
        onClick={handleNavigate}
        className="p-4 text-white rounded-md font-bold w-[270px] bg-[url(/hero_bg.png)] bg-cover bg-center flex items-center justify-center cursor-pointer"
      >
        PRÉ-VENDA DISPONÍVEL
      </div>
    </div>
  );
};
