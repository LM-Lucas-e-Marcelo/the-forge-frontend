type SpeakerCardProps = {
  name: string;
  position: string;
  imgUrl: string;
};

export const SpeakerCard = ({ name, position, imgUrl }: SpeakerCardProps) => {
  return (
    <div className="max-w-[400px] pl-2 bg-gradient-to-b from-black to-primary rounded-2xl">
      <div className="bg-gradient-to-b from-white to-zinc-100 relative rounded-2xl overflow-hidden max-h-[400px]">
        <img src={imgUrl} alt="Nome do palestrante" width={400} />
        <span className="absolute bottom-0 left-0 right-0 text-center text-white z-20 p-2">
          <h2 className="text-3xl">{name}</h2>
          <p className="text-lg">{position}</p>
        </span>
        <div className="bg-gradient-to-b from-transparent to-primary w-full h-[150px] absolute bottom-0 z-10" />
      </div>
    </div>
  );
};
