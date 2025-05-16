import { Hero } from "../components/hero";
import { Know } from "../components/know";
import { Location } from "../components/location";
import { Speakers } from "../components/speakers";
import { Testimonials } from "../components/testimonials";
import { Tickets } from "../components/tickets";
import { YouReady } from "../components/you-ready";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Know />
      <Speakers />
      <Location />
      <YouReady />
      <Testimonials />
      <Tickets />
    </div>
  );
};
