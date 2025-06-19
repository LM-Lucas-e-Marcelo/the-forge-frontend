import { Container } from "./container";

export const Testimonials = () => {
  return (
    <Container invert>
      <div className="w-full flex flex-col justify-center items-center">
        <section className="text-white flex flex-col gap-4">
          <h1 className="text-5xl text-center font-tertiary">Apresentação</h1>
        </section>

        <div className="flex gap-10 mt-10">
          <div className="p-2 bg-gradient-to-b from-black to-primary rounded-2xl">
            <iframe
              className="rounded-lg"
              width="700"
              height="394"
              src="https://www.youtube.com/embed/ZCCdaz4kdJQ?si=rsU3ANgOaGJqnvjg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
