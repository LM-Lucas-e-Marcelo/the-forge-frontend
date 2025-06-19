import { Hero } from "../components/hero";
import { HowIKnow } from "../components/how-i-know";
import { Know } from "../components/know";
import { Location } from "../components/location";
import { Speakers } from "../components/speakers";
import { Testimonials } from "../components/testimonials";
import { Tickets } from "../components/tickets";
import { TicketsInformation } from "../components/tickets-information";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Know />
      <TicketsInformation />
      <Speakers />
      <Testimonials />
      <Location />
      <HowIKnow />
      <Tickets />
    </div>
  );
};
