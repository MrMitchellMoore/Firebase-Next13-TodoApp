"use client";

import { Todo } from "@/components/Todo";
import { db } from "@/lib/firebase";
import { TodoType } from "@/typings";
import {
  collection,
  DocumentData,
  QueryDocumentSnapshot,
  getDocs,
  CollectionReference,
  SnapshotOptions,
  FieldPath,
  onSnapshot,
  query,
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
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      let todosArr: QueryDocumentSnapshot<TodoType>[] = [];
      querySnapShot.docs.map((doc) => {
        return todosArr?.push({
          ...doc.data(),
          id: doc.id,
          ref: doc.ref,
          data: function (_options?: SnapshotOptions | undefined): TodoType {
            throw new Error("Function not implemented.");
          },
          get: function (
            _fieldPath: string | FieldPath,
            _options?: SnapshotOptions | undefined
          ) {
            throw new Error("Function not implemented.");
          },
          metadata: doc.metadata,
          exists: function (): QueryDocumentSnapshot<TodoType, DocumentData> {
            throw new Error("Function not implemented.");
          },
        });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
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
