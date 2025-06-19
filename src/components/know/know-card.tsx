type KnowCardProps = {
  title: string;
  subTitle: string;
  text: string;
};

export const KnowCard = ({ title, subTitle, text }: KnowCardProps) => {
  return (
    <div className="text-white p-6 max-w-[400px] w-full flex items-center justify-center">
      <div className="max-w-[300px] h-[2-0px] flex flex-col items-center gap-3">
        <section className="w-full flex flex-col justify-center gap-3">
          <div
            className="text-xl z-10 text-white font-secondary"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-lg text-primary z-10 font-secondary">{subTitle}</p>
        </section>
        <p className=" text-md text-white">{text}</p>
      </div>
    </div>
  );
};
