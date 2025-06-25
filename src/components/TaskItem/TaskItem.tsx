import type { TaskItemProps } from "../../types";

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };

  const priorityColors: Record<string, string> = {
    low: "text-green-500",
    medium: "text-yellow-500",
    high: "text-red-500",
  };

  return (
    <li className="bg-black text-white p-3 rounded-md shadow-sm mb-3 border border-gray-800 text-sm">
      <div className="flex justify-between items-center gap-3">
        <div>
          <h3 className="font-bold text-base">{task.title}</h3>
          <p className="text-xs text-gray-400">{task.description}</p>
          <p className={`mt-1 ${priorityColors[task.priority]} text-xs`}>
            Priority: {task.priority}
          </p>
          <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <select
            value={task.status}
            onChange={(e) =>
              onStatusChange(task.id, e.target.value as any)
            }
            className={`rounded px-2 py-1 text-xs font-medium border-none shadow-sm ${statusColors[task.status]}`}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:underline text-xs"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
