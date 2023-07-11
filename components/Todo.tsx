import { TodoType } from "@/typings";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize w-full`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize w-full`,
  row: `flex`,
  text: `ml-2 cursor-pointer mx-2 w-full`,
  textComplete: `ml-2 cursor-pointer line-through mx-2`,
  button: `cursor-pointer flex items-center`,
};

type TodoProps = {
  todo: TodoType;
  toggleComplete: (todo: TodoType) => {};
};

export function Todo({ todo, toggleComplete }: TodoProps) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className="flex flex-col">
        <div className="bg-slate-500 mb-2 rounded-lg">
          <div className="flex justify-between items-center text-xl mx-2 font-bold">
            <div className="flex items-center gap-1">
              <input
                onChange={() => toggleComplete(todo)}
                type="checkbox"
                checked={todo.completed ? true : false}
                name="todo"
                className="form-checkbox rounded text-green-500"
              />
              <p
                onClick={() => toggleComplete(todo)}
                className={todo.completed ? style.textComplete : style.text}
                id={todo.id}
              >
                {todo.title}
              </p>
            </div>
            <button>
              <FaRegTrashAlt size={15} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
