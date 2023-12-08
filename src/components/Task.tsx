import { BsTrash3 } from "react-icons/bs"

interface TaskProps {
  taskContent: string;
  onDelete: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isTaskCompleted: boolean;
}

export const Task = ({ taskContent, onDelete, onChange, isTaskCompleted }: TaskProps) => {
  return (
    <div
      className={`p-4  w-full rounded-lg border flex justify-between gap-4 border-gray-700 items-center ${
        isTaskCompleted ? "bg-gray-700 " : ""
      }`}
    >
      <input
        type="checkbox"
        className="rounded-full"
        checked={isTaskCompleted}
        onChange={onChange}
      />
      <p
        className={`font-normal text-gray-200 ${
          isTaskCompleted ? "line-through text-gray-500" : ""
        }`}
      >
        {taskContent}
      </p>
      <button onClick={onDelete} className="w-[25px] h-[25px] flex justify-center items-center text-gray-300">
        <BsTrash3 />
      </button>
    </div>
  )
}