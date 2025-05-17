import { useNavigate } from "react-router";

export const Tickets = () => {
  const naviate = useNavigate();

  const handleNavigate = () => {
    naviate("/tickets");
  };
  return (
    <div className="fixed bottom-2 left-[50%] transform -translate-x-1/2 w-[500px] flex gap-5 justify-between p-4 rounded-2xl backdrop-blur bg-zinc-500/40 z-50">
      <section className="text-white">
        <p className="text-2xl">R$ 1.890,00</p>
        <p>LOTE 1 DISPONÍVEL</p>
      </section>
      <button
        onClick={handleNavigate}
        className="p-4 text-white bg-gradient-to-l from-black to-primary rounded-md font-bold w-[200px]"
      >
        Comprar Ingresso
      </button>
    </div>
  );
};
