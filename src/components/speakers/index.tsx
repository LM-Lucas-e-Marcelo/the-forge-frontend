import { SPEAKERS } from "../../constants/speakers";
import { Container } from "../container";

export const Speakers = () => {
  return (
    <Container>
      <span
        id="speakers"
        className="sm:text-6xl text-3xl font-bold text-white flex flex-col gap-3 text-center"
      >
        <h1 className="sm:mr-40 mr-30 font-tertiary">Palestrantes</h1>
        <h1 className="sm:ml-40 ml-30 font-tertiary">Confirmados</h1>
      </span>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20">
        {SPEAKERS.map((speaker) => (
          <img
            src={speaker.imgUrl}
            alt={speaker.name}
            key={speaker.name}
            className="sm:max-h-[700px] sm:h-[100%]"
          />
        ))}
      </div>
    </Container>
  );
};
