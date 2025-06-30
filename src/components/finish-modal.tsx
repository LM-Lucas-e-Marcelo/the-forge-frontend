interface FinishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FinishModal = ({ isOpen, onClose }: FinishModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="bg-[url(/hero_bg.png)] bg-cover bg-center rounded-lg shadow-lg p-6 w-full max-w-md flex items-center justify-between flex-col"
          >
            <h2 className="text-xl font-semibold mb-4 text-white text-center">
              Se já realizou a compra, agora vem o próximo passo. Entre nesse
              grupo de whatsapp exclusivo para estar por dentro das novidades.
            </h2>

            <a
              href="https://chat.whatsapp.com/HcjGEvxLi9i7er8R9zzVSS?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="p-4 mt-2 bg-green-500 rounded-md text-white font-secondary"
            >
              Entre no nosso grupo do wahtsapp
            </a>
          </div>
        </div>
      )}
    </>
  );
};
