import { useState } from "react";
import { FinishModal } from "./finish-modal";

export const Tickets = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => setOpenModal((prevState) => !prevState);

  const handleNavigate = () => {
    handleToggleModal();
    window.open(
      "https://www.sympla.com.br/evento/a-forja-2025/2983812",
      "_blank"
    );
  };
  return (
    <>
      <div className="sm:fixed bottom-2 left-[50%] transform -translate-x-1/2 w-[500px] hidden sm:flex gap-5 justify-between p-4 rounded-2xl backdrop-blur bg-zinc-500/40 z-50">
        <section className="text-white">
          <p className="text-2xl">R$ 169,90</p>
          <p>LOTE 2</p>
        </section>
        <div
          role="button"
          onClick={handleNavigate}
          className="p-4 text-white rounded-md font-bold w-[270px] bg-[url(/hero_bg.png)] bg-cover bg-center flex items-center justify-center cursor-pointer"
        >
          VENDA DISPONÍVEL
        </div>
      </div>
      <FinishModal isOpen={openModal} onClose={handleToggleModal} />
    </>
  );
};
