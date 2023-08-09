import { BsPlusCircle } from "react-icons/bs";

interface headerProps{
    onClick: () => void
}

export const Header = ({onClick}:headerProps) => (
    <header className="bg-gray-950">
    <div className="text-white flex justify-center items-center w-screen h-44 bg-gray-950 relative">
      <img src="src/assets/Logo.png" alt="Logo" />
      <form onSubmit={onClick} className="w-full flex justify-center absolute bottom-[-28px] ">
        <input
          name="task"
          placeholder="Adicione uma nova tarefa"
          type="text"
          className="p-4 w-5/12 border border-gray-950 rounded-lg bg-gray-700
          mr-2 leading-6 font-normal text-base focus:border-[#5E60CE] focus:outline-0 "
          required
        />
        <button 
        className="p-4 flex items-center justify-center gap-3 w-24
         bg-[#1E6F9F] rounded-lg hover:bg-[#4EA8DE] duration-200"
         type="submit"
         >
          Criar <BsPlusCircle />
        </button>
      </form>
    </div>
  </header>
);