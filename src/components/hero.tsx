import logo from "../assets/logo.png";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-[700px] bg-[url(/hero_bg.png)] bg-cover bg-center" />
      <div className="absolute bottom-[40%] left-[30px]">
        <img src={logo} width={300} alt="logo" />
        <h2 className="text-white text-5xl max-w-[600px]">
          VAI TRANSFORMAR VOCÊ!
        </h2>
      </div>
      <div className="absolute bottom-10 left-10 text-white">
        <p>Grande</p>
        <p>Florianópolis</p>
        <p>A Forja - 2025</p>
      </div>
    </div>
  );
};
