import { Container } from "../components/container";
import eventImage from "../assets/event.webp";
import { TicketCard } from "../components/ticket-card";
import { TICKETS } from "../constants/tickets";

export const TicketsPage = () => {
  return (
    <Container>
      <img src={eventImage} alt="Estrutura do evento" className="mt-[-100px]" />

      <div className="text-white flex flex-col items-center">
        <section>
          <h1 className="text-5xl font-tertiary">COMPRA DE INGRESSOS</h1>
          <p className="text-xl text-center mt-4">
            CONFIRA OS PLANOS E BENEFÍCIOS ABAIXO
          </p>
        </section>
        <section className="flex gap-4 items-start">
          {TICKETS.map((ticket) => (
            <TicketCard
              key={ticket.title}
              title={ticket.title}
              benefits={ticket.benefits}
              price={ticket.price}
              rate={ticket?.rate}
              times={ticket.times}
              hasTag={ticket?.hasTag}
            />
          ))}
        </section>
      </div>
    </Container>
  );
};
