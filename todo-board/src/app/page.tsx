"use client";

import "./globals.css";
import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";
import BoardList from "@/components/BoardList";
import Button from "@/components/ui/Button";

export default function Page() {

  const { addBoard } = useTodoStore();
  const [title, setTitle] = useState("");

  const addNewBoard = () => {
    if (title.trim()) {
      addBoard(title);
      setTitle("");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 제목 */}
      <h1 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2">
        <span className="text-gray-800">ToDo List</span>
      </h1>

      {/* 입력 필드 & 버튼 */}
      <div className="flex justify-center gap-6 mb-20">
        <input
          className="px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-96 text-lg"
          placeholder="보드 제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNewBoard()}
        />
        <Button variant="primary" onClick={addNewBoard} className="w-36">
          보드 추가
        </Button>

      </div>

      {/* 보드 리스트 컴포넌트 */}
      <BoardList />
    </div>
  );
}
