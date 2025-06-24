import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5511974421689"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      <div className="absolute w-16 h-16 rounded-full bg-green-500 opacity-75 animate-ping"></div>
      <FaWhatsapp size={40} color="white" />
    </a>
  );
};
