import { SPEAKERS } from "../../constants/speakers";
import { Container } from "../container";
import { SpeakerCard } from "./speaker-card";

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
      <div className="flex flex-col gap-6 mt-20 justify-center items-center">
        {SPEAKERS.map((speaker) => (
          <SpeakerCard key={speaker.name} {...speaker} />
        ))}
      </div>
    </Container>
  );
};
