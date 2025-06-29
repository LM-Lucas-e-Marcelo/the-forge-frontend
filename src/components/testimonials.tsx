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
              className="rounded-lg sm:w-[700px] sm:h-[394px] w-[500px] h-[270px]"
              src="https://www.youtube.com/embed/6aOKS3vJ6wU?si=lyi8qIIkbvAWI4rp"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
