import { useState } from "react";
import { TRAILS } from "../../constants/trails";
import { TrailCard } from "./trail-card";

export const TrailsComponent = () => {
  const [openedCard, setOpenedCard] = useState("");

  const handleSelectCard = (question: string) => {
    setOpenedCard((prevState) => (prevState === question ? "" : question));
  };

  return TRAILS.map(({ title, description }) => (
    <button
      key={title}
      onClick={() => handleSelectCard(title)}
      className="w-full"
    >
      <TrailCard
        title={title}
        description={description}
        isOpen={openedCard === title}
      />
    </button>
  ));
};
