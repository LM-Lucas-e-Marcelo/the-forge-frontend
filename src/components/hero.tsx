import heroMp4 from "../assets/hero.mp4";

export const Hero = () => {
  return (
    <div>
      <video muted loop autoPlay>
        <source src={heroMp4} type="video/mp4" />
      </video>
    </div>
  );
};
