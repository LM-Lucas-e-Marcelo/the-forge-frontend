import { tv, type VariantProps } from "tailwind-variants";
import { ALL_BENEFITS } from "../../constants/tickets";
import { cardVariants } from "./card-variants";

const card = tv({
  slots: {
    root: "max-w-[400px] w-full bg-black py-10 px-10 rounded-2xl shadow-lg border-5",
    cardTitle: "font-tertiary text-5xl text-center",
    lote: "text-lg text-center mt-2",
    unity: " font-tertiary text-xl",
    cardPrice: "text-4xl font-tertiary",
    button:
      "p-3 rounded-md text-white font-secondary w-full mt-6 cursor-pointer",
  },

  variants: cardVariants,
});

type CardVariants = VariantProps<typeof card>;

type TicketCardProps = CardVariants & {
  title: string;
  benefits: string[];
  price: string;
  perMounth: string;
  times: number;
};

const { root, cardTitle, lote, unity, cardPrice, button } = card();

export const TicketCard = ({
  title,
  benefits,
  price,
  perMounth,
  times,
  color,
}: TicketCardProps) => {
  const handleNavigate = () => {
    window.open(
      "https://www.sympla.com.br/evento/a-forja-2025/2983812/.",
      "_blank"
    );
  };
  return (
    <div className={root({ color })}>
      <h1 className={cardTitle({ color })}>{title}</h1>
      <h2 className={lote({ color })}>1 Lote</h2>
      <div className="flex gap-2 items-baseline w-full justify-center mt-5">
        <strong className={unity({ color })}>R$</strong>
        <strong className={cardPrice({ color })}>{price}</strong>
      </div>
      <p className="text-center text-white">{`${times}x R$${perMounth} s/juros`}</p>
      <button onClick={handleNavigate} className={button({ color })}>
        Quero meu ingresso {title}
      </button>
      <ul className="mt-10 flex flex-col gap-2">
        {ALL_BENEFITS.map((benefit) => (
          <li
            className={
              benefits.includes(benefit) ? "text-white" : "text-zinc-500"
            }
          >
            {benefits.includes(benefit) ? (
              "✓"
            ) : (
              <span className="text-xl font-secondary">×</span>
            )}{" "}
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};
