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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.224708999683!2d-46.65164868502182!3d-23.55444958468145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58a7e4b5b5b9%3A0x9c8e7e8f6c9e7c7b!2sAlura%20-%20Educa%C3%A7%C3%A3o%20Online%20S.A.!5e0!3m2!1spt-BR!2sbr!4v1697031234567"
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
