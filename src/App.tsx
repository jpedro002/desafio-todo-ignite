import React, { useState } from "react";
import { Header } from "./components/Header";
import { Nochores } from "./components/Nochores";
import { Task } from "./components/Task";

export const App = () => {
  const [tarefasCriadas, setTarefasCriadas] = useState(0);
  const [tarefasconcluidas, setTarefasConcluidas] = useState(0);
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = event.currentTarget.task.value.trim()
    if(newTask){
      setTarefasCriadas(prevState => prevState + 1);
    setTaskList(prevState => [...prevState, newTask]);
    event.currentTarget.task.value = "";
    }
    else{
      return null
    }
    
  };
  const handleDeleteButton = (index: number) => {
    setTaskList(prevTasks => prevTasks.filter((_, i) => i !== index))
    setTarefasCriadas(prevState => prevState - 1);
    
  }
  const checkIfThatIsChecked = (event) => {
    const isChecked = event.currentTarget.checked
                   if(isChecked){
                setTarefasConcluidas(prevState => prevState + 1);
                  } 
                  else{
                setTarefasConcluidas(prevState => prevState - 1)
                  }
  }


  return (
    <>
      <Header onClick={handleSubmitTask} />
      <main>
        <div className="w-screen h-full min-h-[100vh]    bg-gray-800 flex justify-center">
          <div className="p-[64px_24px] gap-3 w-[43rem] flex flex-col justify-start items-center space-y-4">
            <header className="flex justify-between w-full pb-6 border-b border-gray-600">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-[#4EA8DE]">Tarefas criadas</h2>
                <span className="px-2 bg-gray-700 text-gray-300 rounded-full">
                  {tarefasCriadas}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#8284FA]">Concluídas</h3>
                <span className="px-2 bg-gray-700 text-gray-300 rounded-full">
                  {tarefasconcluidas}
                </span>
              </div>
            </header>
            { taskList.length === 0 ? (
              <Nochores />
            ) : (
              taskList.map((item, index) => (
                <Task
                  onDelete={() => handleDeleteButton(index)}
                  taskContent={item}
                  key={index}
                  onChange={(event) => checkIfThatIsChecked(event) }
                />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
};
