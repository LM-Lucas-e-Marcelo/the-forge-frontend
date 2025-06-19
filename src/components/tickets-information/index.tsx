import { TICKETS } from "../../constants/tickets";
import { Container } from "../container";
import { TicketCard } from "./ticket-card";

export const TicketsInformation = () => {
  return (
    <Container invert>
      <h1 className="text-5xl text-white text-center mt-10">Ingressos</h1>
      <div className="flex gap-4 flex-wrap mt-10">
        {TICKETS.map(({ color, ...rest }, index) => (
          <TicketCard key={index} color={color as never} {...rest} />
        ))}
      </div>
    </Container>
  );
};
