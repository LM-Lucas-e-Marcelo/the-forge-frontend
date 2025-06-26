import whiteLogo from "../../assets/white_logo.png";

type SpeakerCardProps = {
  name: string;
  position: string;
  imgUrl: string;
};

export const SpeakerCard = ({ name, position, imgUrl }: SpeakerCardProps) => {
  return (
    <div className="flex text-white">
      <img src={imgUrl} width={300} alt="speaker image" />
      <div className="bg-gradient-to-t from-black from-[-30%] via-[#e84c2b] to-[#e84c2b] p-10 flex flex-col items-start justify-end gap-5 w-full max-w-[800px] pr-50 relative">
        <strong className="font-tertiary text-xl">{name}</strong>
        <div
          className="text-md"
          dangerouslySetInnerHTML={{ __html: position }}
        />
        <img
          className="absolute top-[-10px] right-4"
          src={whiteLogo}
          width={100}
          alt="logo"
        />
      </div>
    </div>
  );
};
