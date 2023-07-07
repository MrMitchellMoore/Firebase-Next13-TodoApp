import { FaRegTrashAlt } from "react-icons/fa";

export function Todo({ todo }: { todo: string }) {
  return (
    <li>
      <div className="flex flex-col">
        <div className="bg-slate-500 mb-2 rounded-lg">
          <div className="flex justify-between items-center text-xl mx-2 font-bold">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name="todo"
                className="form-checkbox rounded text-green-500"
              />
              <p>{todo}</p>
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
