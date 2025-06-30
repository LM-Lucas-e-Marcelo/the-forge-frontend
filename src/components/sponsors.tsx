import alves from "../assets/sponsors/alves.png";
import cardelik from "../assets/sponsors/cardelik.png";
import edasuaconta from "../assets/sponsors/edasuaconta.png";
import ga from "../assets/sponsors/ga.png";
import meira from "../assets/sponsors/meira.png";
import movimento from "../assets/sponsors/movimento.png";
import prefeitura from "../assets/sponsors/prefeitura.png";
import somar from "../assets/sponsors/somar.png";
import splenger from "../assets/sponsors/splenger.png";

export const Sponsors = () => {
  return (
    <div className="flex gap-4 flex-wrap items-center justify-center p-10">
      <img
        src={edasuaconta}
        alt="E da Sua Conta"
        className="h-[60px] w-auto object-contain"
      />
      <img src={alves} alt="Alves" className="h-[40px] w-auto object-contain" />
      <img
        src={cardelik}
        alt="Cardelik"
        className="h-[40px] w-auto object-contain"
      />

      <img
        src={movimento}
        alt="Movimento"
        className="h-[40px] w-auto object-contain"
      />
      <img src={meira} alt="Meira" className="h-[60px] w-auto object-contain" />
      <img
        src={prefeitura}
        alt="Prefeitura"
        className="h-[40px] w-auto object-contain"
      />
      <img src={somar} alt="Somar" className="h-[40px] w-auto object-contain" />
      <img
        src={splenger}
        alt="Splenger"
        className="h-[40px] w-auto object-contain"
      />
      <img src={ga} alt="GA" className="h-[60px] w-auto object-contain" />
    </div>
  );
};
