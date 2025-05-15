import { SPEAKERS } from "../../constants/speakers";
import { Container } from "../container";
import { SpeakerCard } from "./speaker-card";

export const Speakers = () => {
  return (
    <Container>
      <span className="text-6xl font-bold text-white flex flex-col gap-3 text-center">
        <h1 className="mr-40">Palestrantes</h1>
        <h1 className="ml-40">Confirmados</h1>
      </span>
      <div className="flex flex-wrap gap-4 mt-20 justify-center">
        {SPEAKERS.map((speaker) => (
          <SpeakerCard
            key={speaker.name}
            name={speaker.name}
            position={speaker.position}
            imgUrl={speaker.imgUrl}
          />
        ))}
      </div>
    </Container>
  );
};
