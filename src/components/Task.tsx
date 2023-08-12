import { useState } from "react"
import { BsTrash3 } from "react-icons/bs"

interface TaskProps {
  taskContent: string;
  onDelete: () => void;
  onChange: () => void
}

export const Task = ({ taskContent, onDelete,onChange }:TaskProps) => {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(false)

  const handleCheckboxChange = () => {
    setIsTaskCompleted(!isTaskCompleted)
  }

  return (
    <div
      className={`p-4 w-full rounded-lg border flex justify-between gap-4 border-gray-700 items-center ${
        isTaskCompleted ? "bg-gray-700 " : ""
      }`}
    >
      <input
        type="checkbox"
        className="rounded-full"
        onClick={handleCheckboxChange}
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
