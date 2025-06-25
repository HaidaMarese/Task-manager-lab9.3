import { useState } from "react";
import type { TaskFilterProps } from "../../types";

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");

  const handleChange = () => {
    onFilterChange({
      status: status === "all" ? undefined : status as any,
      priority: priority === "all" ? undefined : priority as any,
    });
  };

  return (
    <div className="flex justify-center gap-4 mb-6">
      <select value={status} onChange={(e) => { setStatus(e.target.value); handleChange(); }} className="border px-2 py-1 rounded">
        <option value="all">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select value={priority} onChange={(e) => { setPriority(e.target.value); handleChange(); }} className="border px-2 py-1 rounded">
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

export default TaskFilter;
