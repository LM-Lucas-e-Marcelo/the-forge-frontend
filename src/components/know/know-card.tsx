type KnowCardProps = {
  title: string;
  subTitle: string;
  text: string;
  benefits: string[];
};

export const KnowCard = ({
  title,
  subTitle,
  text,
  benefits,
}: KnowCardProps) => {
  return (
    <div className="bg-gradient-to-b from-zinc-100 to-white text-white p-6 max-w-[400px]  rounded-2xl w-full min-h-[550px]">
      <section className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl  z-10 font-extrabold text-primary">{title}</h1>
        <p className="text-xl text-zinc-900 z-10 text-center ">{subTitle}</p>
      </section>
      <p className="mt-10 text-lg text-zinc-900">{text}</p>
      <section className="flex flex-col mt-4 text-zinc-900 font-extrabold text-lg">
        {benefits.map((benefit) => (
          <span key={benefit}>- {benefit}</span>
        ))}
      </section>
    </div>
  );
};
