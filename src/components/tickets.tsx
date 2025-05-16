export const Tickets = () => {
  return (
    <div className="fixed bottom-2 right-2 w-[500px] flex gap-5 justify-between p-4 rounded-2xl backdrop-blur bg-zinc-500/40 z-50">
      <section className="text-white">
        <p className="text-2xl">R$ 1.890,00</p>
        <p>LOTE 1 DISPONÍVEL</p>
      </section>
      <button className="p-4 text-white bg-gradient-to-l from-black to-primary rounded-md font-bold w-[200px]">
        Comprar Ingresso
      </button>
    </div>
  );
};
