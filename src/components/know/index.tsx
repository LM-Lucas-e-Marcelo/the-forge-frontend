import { KNOW_CARDS } from "../../constants/know-constants";

import { KnowCard } from "./know-card";

export const Know = () => {
  return (
    <div className="w-full bg-black px-10 py-30 bg-[url(/stage.png)] bg-cover bg-center">
      <div className="max-w-[1440px] mx-auto w-full">
        <h1 className="text-white sm:text-5xl text-3xl my-10 text-center font-tertiary">
          TUDO O QUE VOCÊ PRECISA <br /> PARA IR MAIS LONGE
        </h1>

        <div className="flex flex-row gap-4 flex-wrap items-center justify-center mt-20">
          {KNOW_CARDS.map((card, index) => {
            return (
              <div className="flex flex-col sm:flex-row items-center">
                <KnowCard key={card.title} {...card} />
                {index !== KNOW_CARDS.length - 1 && (
                  <div className="sm:h-[190px] sm:w-[3px] bg-primary rounded-full w-[90%] h-[3px]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
