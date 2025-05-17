import { tv, type VariantProps } from "tailwind-variants";

const ticketCardStyles = tv({
  base: "bg-gradient-to-b from-zinc-100 to-white flex flex-col gap-4 items-center w-[300px] rounded-2xl p-4 mt-10 shadow-lg relative",
  variants: {
    hasTag: {
      true: "border-2 border-primary",
    },
  },
});

type TicketCardStylesProps = VariantProps<typeof ticketCardStyles>;

type TicketCardProps = {
  title: string;
  benefits: string[];
  price: string;
  rate: string | null;
  times: number;
  hasTag?: boolean;
} & TicketCardStylesProps;

export const TicketCard = ({
  title,
  benefits,
  price,
  rate,
  times,
  hasTag,
}: TicketCardProps) => {
  return (
    <div className={ticketCardStyles({ hasTag })}>
      {hasTag && (
        <div className="bg-primary absolute py-1 px-4 rounded-md top-[-20px] left-[50%] transform -translate-x-1/2 font-tertiary">
          RECOMENDADO
        </div>
      )}
      <h1 className="text-2xl text-primary font-tertiary mt-2">{title}</h1>
      <div className="flex flex-col gap-4 text-lg text-zinc-900">
        {benefits.map((benefit) => (
          <span key={benefit}>• {benefit}</span>
        ))}
        <span className="w-full flex flex-col text-center mt-10 font-tertiary">
          <strong>R$ {price}</strong>
          {rate && <strong>+ R$ {rate}</strong>}
          <strong>Em até {times}x no cartão de crédito</strong>
        </span>
      </div>
      <button className="bg-primary text-white font-tertiary rounded-lg py-2 px-4 hover:bg-opacity-80 transition duration-300 w-full">
        Comprar
      </button>
    </div>
  );
};
