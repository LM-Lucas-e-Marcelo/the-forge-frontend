import { Hero } from "../components/hero";
import { HowIKnow } from "../components/how-i-know";
import { Know } from "../components/know";
import { Location } from "../components/location";
import { Speakers } from "../components/speakers";
import { Testimonials } from "../components/testimonials";
import { Trails } from "../components/trails";
import { WhatsappButton } from "../components/whatsapp-button";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Know />
      {/* <TicketsInformation /> */}
      <Trails />
      <Speakers />
      <Testimonials />
      <Location />
      <HowIKnow />
      {/* <Tickets /> */}
      <WhatsappButton />
    </div>
  );
};
