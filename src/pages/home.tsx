import { Hero } from "../components/hero";
import { HowIKnow } from "../components/how-i-know";
import { Know } from "../components/know";
import { Location } from "../components/location";
import { Space } from "../components/space";
import { Speakers } from "../components/speakers";
import { Testimonials } from "../components/testimonials";
import { Tickets } from "../components/tickets";
import { YouReady } from "../components/you-ready";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Know />
      <HowIKnow />
      <Speakers />
      <Space />
      <Testimonials />
      <Location />
      <YouReady />
      <Tickets />
    </div>
  );
};
