"use client";

import { Todo } from "@/components/Todo";
import { db } from "@/lib/firebase";
import { TodoType } from "@/typings";
import {
  collection,
  DocumentData,
  QueryDocumentSnapshot,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Home() {
  const [todos, setTodos] = useState<
    QueryDocumentSnapshot<DocumentData, TodoType>[]
  >([]);

  // TODO create todo

  // TODO read todo

  useEffect(() => {
    const getTodos = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      let newTodos: any = [];
      querySnapshot.forEach((doc) => {
        newTodos.push({ ...doc.data(), id: doc.id });
      });
      setTodos(newTodos);
    };

    getTodos();
  }, []);

  // TODO update todo

  // TODO delete todo

  return (
    <>
      <div className="max-w-full flex justify-center mx-2">
        <div className="flex flex-col justify-center items-center mt-24 gap-2 w-[500px] border bg-slate-100 shadow-md rounded-md">
          <div className="py-6">
            <h3 className="text-4xl text-center font-bold my-1 text-gray-800">
              Todo App
            </h3>
            <form className="flex justify-center items-center gap-2 mb-2">
              <input
                type="text"
                className="form-input rounded-md w-full"
                placeholder="Add Todo"
              />
              <button className="bg-fuchsia-600 hover:bg-fuchsia-300 border border-purple-950 rounded-md">
                <AiOutlinePlus size={40} />
              </button>
            </form>
            <div>
              <ul>
                {todos.map((todo) => (
                  <Todo key={todo.id} todo={todo} />
                ))}
              </ul>
            </div>
          </div>
          <p className="text-2xl font-bold">You have 2 todos</p>
        </div>
      </div>
    </>
  );
}
