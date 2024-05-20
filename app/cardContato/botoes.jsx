import { Button, useDisclosure } from "@nextui-org/react";

const Contatenos = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <Button
        key={"opaque"}
        variant="flat"
        onPress={() => handleOpen()}
        className="hover:scale-110 transition transition-300 cursor-pointer border-[1px] border-solid border-slate-700 p-2 rounded-lg"
      >
        <p>Contate-nos</p>
      </Button>
    </>
  );
};
const Comecar = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <Button
        key={"opaque"}
        variant="flat"
        onPress={() => handleOpen()}
        className="w-72 h-16 grid place-items-center rounded-xl bg-cyan-200 mb-16 shadow-xl
        hover:scale-110 transition transition-300 cursor-pointer z-20"
      >
        <p className="font-delius text-2xl">Comecar</p>
      </Button>
    </>
  );
};

export default { Contatenos, Comecar };
