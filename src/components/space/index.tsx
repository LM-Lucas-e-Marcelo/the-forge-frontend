import { Container } from "../container";

export const Space = () => {
  return (
    <Container invert>
      <div className="w-full bg-primary p-10 rounded-2xl shadow">
        <h1 className="text-5xl text-white text-center font-tertiary">
          Lorem ipsum dolor <br /> sit amet.
        </h1>
        <p className="text-lg text-white text-center max-w-[700px] mx-auto mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex gap-4 mt-40 text-white items-center justify-center">
          <div className="h-[550px] w-[400px] flex flex-col gap-4 items-center">
            <div className="h-[500px] w-full bg-[url(/spaces/space_one.jpg)] bg-cover rounded-2xl" />
            <span className="font-bold text-2xl">Lorem Ipsum</span>
          </div>
          <div className="h-[550px] w-[400px] flex flex-col gap-4 items-center mt-[-100px]">
            <div className="h-[500px] w-full bg-[url(/spaces/space_two.jpg)] bg-cover rounded-2xl" />
            <span className="font-bold text-2xl">Lorem Ipsum</span>
          </div>
          <div className="h-[550px] w-[400px] flex flex-col gap-4 items-center">
            <div className="h-[500px] w-full bg-[url(/spaces/space_three.jpg)] bg-cover rounded-2xl" />
            <span className="font-bold text-2xl">Lorem Ipsum</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
