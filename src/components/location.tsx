export const Location = () => {
  return (
    <div
      id="location"
      className="w-full bg-gradient-to-b from-black to-primary pt-20"
    >
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-5xl font-bold text-white font-tertiary">
          Local do evento
        </h1>
        <p className="text-2xl text-gray-300">
          Firenze Business Park - Av. do Comércio, 965 - Pacheco, Palhoça - SC,
          88134-852
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.670863213902!2d-48.672031324534125!3d-27.665653176206405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735f3e51b19d9%3A0xb1483d09e8fe510e!2sFirenze%20Centro%20de%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1750771014851!5m2!1spt-BR!2sbr"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
