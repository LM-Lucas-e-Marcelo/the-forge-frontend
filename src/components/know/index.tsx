import { KNOW_CARDS } from "../../constants/know-constants";
import { Container } from "../container";
import { KnowCard } from "./know-card";

export const Know = () => {
  return (
    <Container invert>
      <h1 className="text-white text-5xl my-10 text-center font-tertiary">
        Saiba mais sobre tudo que acontecerá <br /> na imersão de 2 dias de
        evento
      </h1>

      <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
        {KNOW_CARDS.map((card) => (
          <KnowCard key={card.title} {...card} />
        ))}
      </div>

      <p className="text-xl text-white mt-10 max-w-[700px] text-center mx-auto z-20">
        Estes seis comportamentos não são apenas estratégias, mas sim pilares de
        uma filosofia que eleva tanto o líder quanto sua empresa. Eles são as
        pedras angulares no arco da conquista, sustentando uma estrutura que se
        eleva em direção ao sucesso empreendedor.
      </p>
    </Container>
  );
};
