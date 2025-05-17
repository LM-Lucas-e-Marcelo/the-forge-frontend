import { Container } from "./container";
import zeImg from "../assets/ze.jpg";

export const HowIKnow = () => {
  return (
    <Container>
      <div className="flex w-full justify-around py-20 items-center">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h1 className="text-5xl text-white font-tertiary">
            Como eu sei disso? Bom, tive uma longa jornada antes de conseguir
            faturar 25 milhões por mês:
          </h1>
          <section className="text-lg text-white flex flex-col gap-2 mt-10">
            <span>• Equipe não batia meta.</span>
            <span>• Faturamento não aumentava.</span>
            <span>• Me sentia sobrecarregado e responsável por tudo.</span>
            <span>
              • Não conseguia delegar e ter tempo para o estratégico de sua
              empresa.
            </span>
            <span>
              • Sentia que o time faz o que quer e não o que precisa ser feito.
            </span>
            <span>• Equipe estava sempre desmotivada e desengajada.</span>
          </section>
        </div>
        <img src={zeImg} width={400} alt="How I know" className="rounded-2xl" />
      </div>
    </Container>
  );
};
