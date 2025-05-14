import heroMp4 from "../assets/hero.mp4";
import waves from "../assets/waves.png";

export const Hero = () => {
  return (
    <div className="relative">
      <video muted loop autoPlay>
        <source src={heroMp4} type="video/mp4" />
      </video>
      <img src={waves} className="mt-[-100px] w-full object-cover" />
      <div className="absolute bottom-[40%] left-[24px]">
        <h1 className="text-white text-5xl mb-5">A Forja</h1>
        <h2 className="text-white text-3xl max-w-[500px]">
          O MAIOR EVENTO DE GESTÃO EMPRESARIAL E LIDERANÇA DE SANTA CATARINA!
        </h2>
      </div>
    </div>
  );
};
