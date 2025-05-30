import { useNavigate } from "react-router";
import { Container } from "./container";
import { Button } from "./form/button";
import { Input } from "./form/input";

export const YouReady = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/tickets");

  return (
    <Container invert>
      <div
        id="iready"
        className="w-full flex items-center justify-center flex-col gap-4 my-10"
      >
        <section className="text-white">
          <h1 className="text-5xl font-tertiary">PREPARADO PARA A FORJA?</h1>
          <p className="text-center text-2xl">
            Insira as informações corretamente
          </p>
        </section>
        <div className="p-2 bg-gradient-to-b from-primary to-black rounded-2xl mt-10">
          <form className="w-[350px] bg-white p-4 rounded-xl  flex flex-col gap-6">
            <Input placeholder="Nome Completo" />
            <Input placeholder="Seu Email" />
            <Input placeholder="Seu WhatsApp" />
            <Button color="secondary" onClick={handleNavigate}>
              Quero ser forjado
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
