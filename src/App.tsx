import React, { useState, FormEvent, useEffect } from "react";
import { Header } from "./components/Header";
import { Nochores } from "./components/Nochores";
import { Task } from "./components/Task";

interface TaskItem {
  taskContent: string;
  id: number;
  isChecked?: boolean;
}

export const App: React.FC = () => {

  const loadTasksFromLocalStorage = (): TaskItem[] => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  const [tarefasCriadas, setTarefasCriadas] = useState<number>(0);
  const [tarefasConcluidas, setTarefasConcluidas] = useState<number>(0);
  const [taskList, setTaskList] = useState(loadTasksFromLocalStorage())


  const handleSubmitTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const taskContent: string = event.currentTarget.task.value.trim();

    if (taskContent) {
      const newTask = { taskContent, id: Math.random() * 1000, isChecked: false };
      setTaskList((prevTasks) => [...prevTasks, newTask]);
      event.currentTarget.task.value = "";
    }
  };

  const toggleTaskCompletion = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const tasks = taskList.map((task) => {
      if (task.id === id) {
        task.isChecked = event.target.checked;
      }
      return task;
    });
    setTaskList(tasks);
  }

  const saveTasksToLocalStorage = (tasks: TaskItem[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  useEffect(() => {
    const tasksCompleted = taskList.filter((task) => task.isChecked).length;
    const tasksCreated = taskList.length;
    setTarefasConcluidas(tasksCompleted);
    setTarefasCriadas(tasksCreated);
    saveTasksToLocalStorage(taskList);

  }, [taskList]);

  const handleTaskDeletion = (id: number) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };


  return (
    <>
      <Header onClick={handleSubmitTask} />
      <main>
        <div className="w-screen h-full min-h-[100vh] bg-gray-800 flex justify-center">
          <div className="p-6 mt-12 gap-3 w-[43rem] flex flex-col justify-start items-center space-y-4">
            <header className="flex justify-between w-full pb-6 border-b border-gray-600">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-[#4EA8DE]">Tarefas criadas</h2>
                <span className="px-2 bg-gray-700 text-gray-300 rounded-full">{tarefasCriadas}</span>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#8284FA]">Concluídas</h3>
                <span className="px-2 bg-gray-700 text-gray-300 rounded-full">{tarefasConcluidas}</span>
              </div>
            </header>
            {taskList.length === 0 ? (
              <Nochores />
            ) : (
              taskList.map((item) => (
                <Task
                  onDelete={() => handleTaskDeletion(item.id)}
                  taskContent={item.taskContent}
                  key={item.id}
                  onChange={event => toggleTaskCompletion(item.id,event)}
                  isTaskCompleted={item.isChecked ? true : false}

                />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
};
