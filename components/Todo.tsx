import { TodoType } from '@/typings';
import { FaRegTrashAlt } from 'react-icons/fa';

export function Todo({ todo }: { todo: TodoType }) {
<<<<<<< HEAD
  const { id, title, completed } = todo;
  return (
    <li>
      {completed}
      <div className="flex flex-col">
        <div className="bg-slate-500 mb-2 rounded-lg">
          <div className="flex justify-between items-center text-xl mx-2 font-bold">
            <div className="flex items-center gap-1">
              <input
                id={id}
                type="checkbox"
                name="todo"
                className="form-checkbox rounded text-green-500"
              />
              <p>{title}</p>
            </div>
            <button>
              <FaRegTrashAlt size={15} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
=======
	return (
		<li>
			<div className='flex flex-col'>
				<div className='bg-slate-500 mb-2 rounded-lg'>
					<div className='flex justify-between items-center text-xl mx-2 font-bold'>
						<div className='flex items-center gap-1'>
							<input
								type='checkbox'
								name='todo'
								className='form-checkbox rounded text-green-500'
							/>
							<p id={todo.id}>{todo.title}</p>
						</div>
						<button>
							<FaRegTrashAlt size={15} />
						</button>
					</div>
				</div>
			</div>
		</li>
	);
>>>>>>> 58bd80f4dd662ff4bdaf28c84d20b535c9f8aa9b
}
