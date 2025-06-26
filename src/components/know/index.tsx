import { KNOW_CARDS } from "../../constants/know-constants";

import { KnowCard } from "./know-card";

export const Know = () => {
  return (
    <div className="w-full bg-black px-10 py-30 bg-[url(/stage.webp)] bg-cover bg-center">
      <div className="max-w-[1440px] mx-auto w-full">
        <h1 className="text-white text-5xl my-10 text-center font-tertiary">
          TUDO O QUE VOCÊ PRECISA <br /> PARA IR MAIS LONGE
        </h1>

        <div className="flex flex-row gap-4 flex-wrap items-center justify-center mt-20">
          {KNOW_CARDS.map((card, index) => {
            return (
              <>
                <KnowCard key={card.title} {...card} />
                {index !== KNOW_CARDS.length - 1 && (
                  <div className="h-[190px] w-[3px] bg-primary rounded-full" />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
