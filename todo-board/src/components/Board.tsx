"use client";

import { useTodoStore } from "@/store/todoStore";
import TaskList from "./TaskList";
import Button from "./ui/Button";
import { BoardProps } from "@/types"; 

export default function Board({ board }: BoardProps) {
  const { updateBoard, deleteBoard, addTask } = useTodoStore();

  return (
    <div className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 min-h-[400px]">
      <Button
        variant="icon"
        onClick={() => deleteBoard(board.id)}
        className="absolute top-3 right-3 w-6 h-6 text-gray-500 hover:text-red-500 transition"
        >
        ×
      </Button>
      <input
        className="text-lg font-bold bg-transparent border-b-2 border-gray-300 w-full mb-4"
        value={board.title || ""}
        onChange={(e) => updateBoard(board.id, e.target.value)}
      />
      <Button onClick={() => addTask(board.id)} 
              className="px-4 py-2 bg-black text-white rounded w-full hover:bg-gray-800">
        + 할 일 추가</Button>
        
      <TaskList boardId={board.id} />
    </div>
  );
}
