import { TICKETS } from "../../constants/tickets";
import { Container } from "../container";
import { TicketCard } from "./ticket-card";
import seats from "../../assets/seats.png";
import location from "../../assets/location-3d.png";
import { FinishModal } from "../finish-modal";
import { useState } from "react";

export const TicketsInformation = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = () => setOpenModal((prevState) => !prevState);

  return (
    <Container invert>
      <h1 className="text-5xl text-white text-center mt-10">Ingressos</h1>
      <div className="flex gap-4 flex-wrap mt-10 items-center justify-center">
        {TICKETS.map(({ color, ...rest }, index) => (
          <TicketCard
            key={index}
            handleToggleModal={handleToggleModal}
            color={color as never}
            {...rest}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 w-full items-center justify-center mt-10">
        <img src={location} className="w-[80%]" alt="imagem 3d do palco" />
        <img src={seats} className="w-[80%]" alt="imagem 3d do palco" />
      </div>
      <FinishModal isOpen={openModal} onClose={handleToggleModal} />
    </Container>
  );
};
