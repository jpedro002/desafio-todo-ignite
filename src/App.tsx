import { Header } from "./components/Header";
import { useState } from "react";
import { Nochores } from "./components/Nochores";

export const App = () => {

  const [tarefasCriadas,setTarefasCriadas] = useState(0)
  const [tarefasconcluidas,setTarefasconcluidas] = useState(0)

  const handleSubmitTask = () => {
    event.preventDefault()
    console.log(event.target.task.value );
    
  }

  return (
    <>
      <Header onClick={handleSubmitTask} />
      <main className="bg-gray-800 flex items-center justify-center">
        <div className="w-screen h-screen bg-gray-800 flex justify-center">
          <div className="p-[64px_24px] w-[43rem] flex flex-col justify-start items-center space-y-4">
            <header className="flex justify-between w-full pb-6 border-b border-gray-600">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-[#4EA8DE]  ">
                  Tarefas criadas
                </h2>
                <span className="px-2 bg-gray-700 text-gray-300 rounded-full">
                  {tarefasCriadas}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#8284FA] ">
                  Concluídas
                </h3>
                <span className="px-2 bg-gray-700 text-gray-300 rounded-full">
                  {tarefasconcluidas}
                </span>
              </div>
            </header>
            <Nochores/>          </div>
        </div>
      </main>
    </>
  );
};
// line-through
