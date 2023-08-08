import { HiOutlineClipboardList } from "react-icons/hi";

export const Nochores = () => {
  return (
    <>
      <div className="h-14 w-14 text-gray-600">
        <HiOutlineClipboardList className="h-full w-full" />
      </div>
      <div>
        <h3 className="text-gray-400 font-bold text-base">
          Você ainda não tem tarefas cadastradas
        </h3>
        <h4 className="text-gray-400 font-normal text-base">
          Crie tarefas e organize seus itens a fazer
        </h4>
      </div>
    </>
  );
};
