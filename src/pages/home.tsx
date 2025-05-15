import { Hero } from "../components/hero";
import { Know } from "../components/know";
import { Location } from "../components/location";
import { Speakers } from "../components/speakers";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Know />
      <Speakers />
      <Location />
    </div>
  );
};
