import { Container } from "./container";
import forja from "../assets/forja.webp";

export const Testimonials = () => {
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center">
        <section className="text-white flex flex-col gap-4">
          <h1 className="text-5xl text-center font-tertiary">
            Veja o que dizem pessoas que foram <br /> forjadas por Zé Alves:
          </h1>
          <p className="text-center text-xl">PARA TER RESULTADOS MELHORES</p>
        </section>

        <div className="flex gap-10 mt-10">
          <div className="p-2 bg-gradient-to-b from-black to-primary rounded-2xl">
            <iframe
              className="rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JqZKiumOzoY?si=8Hsb5QWdCzcBt_dk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
          <div className="p-2 bg-gradient-to-b from-black to-primary rounded-2xl">
            <iframe
              className="rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZCCdaz4kdJQ?si=rsU3ANgOaGJqnvjg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <img src={forja} alt="forja" width={250} />
          <p className="text-white max-w-[600px] text-center text-lg">
            E é nesses Comportamentos de líder que tem resultado, que você será
            forjado nos 13 e 14 de abril, para que você tenha um ano de 2024 com
            aumento de resultados e aumento de faturamento.
          </p>
          <p className="text-white max-w-[600px] text-center mt-10 text-lg">
            Pois seu novos comportamentos é o que te trará NOVOS RESULTADOS
          </p>
        </div>
      </div>
    </Container>
  );
};
