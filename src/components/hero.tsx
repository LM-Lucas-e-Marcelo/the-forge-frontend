import logo from "../assets/logo.png";

export const Hero = () => {
  return (
    <div className="relative w-[177.78vh] h-screen md:w-screen md:h-[56.25vw] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-[177.78vh]  h-screen md:w-screen md:h-[56.25vw] object-cover pointer-events-none sm:"
        src="https://www.youtube.com/embed/UWiwM-Ohp5I?autoplay=1&mute=1&controls=0&loop=1&playlist=UWiwM-Ohp5I&modestbranding=1&showinfo=0"
        title="YouTube video background"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      <div className="absolute top-0 left-0 w-[177.78vh] h-screen md:w-screen md:h-[56.25vw] bg-gradient-to-r from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8">
        <img src={logo} alt="Logo" className="sm:w-[250px] w-[200px]" />
        <h1 className="text-white sm:text-5xl text-3xl max-w-[600px]">
          VAI TRANSFORMAR VOCÊ!
        </h1>
        <div className="text-white absolute bottom-10">
          <p>Grande Florianópolis</p>
          <p>A Forja - 2025</p>
        </div>
      </div>
    </div>
  );
};
