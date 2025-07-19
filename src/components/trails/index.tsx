import { Container } from "../container";
import { TrailsComponent } from "./questions";

export const Trails = () => {
  return (
    <Container invert>
      <div className="w-full flex flex-col gap-3 items-center">
        <h1 className="text-6xl text-white text-center mt-10">
          Trilhas de conteúdo
        </h1>
        <span className="text-xl text-white">
          Crie sua jornada com os temas mais relevantes e atuais
        </span>
      </div>
      <section className="w-full gap-4 mt-10 transition-all grid grid-cols-1 md:grid-cols-2">
        <TrailsComponent />
      </section>
    </Container>
  );
};
