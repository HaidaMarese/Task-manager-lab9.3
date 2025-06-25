import { useState } from "react";
import type { Task } from "../../types";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "../TaskItem/TaskItem";

function TaskList() {
  const tasks: Task[] = [
    {
      id: "101",
      title: "Update Resume",
      description: "Revise my resume before internship fair",
      status: "pending",
      priority: "high",
      dueDate: "2025-06-30",
    },
    {
      id: "102",
      title: "Setup Project Repo",
      description: "Initialize GitHub repo for Capstone",
      status: "in-progress",
      priority: "medium",
      dueDate: "2025-07-01",
    },
    {
      id: "103",
      title: "Call Advisor",
      description: "Schedule an appointment for next semester",
      status: "completed",
      priority: "low",
      dueDate: "2025-06-20",
    },
  ];

  const [tasksState, setTaskState] = useState<Task[]>(tasks);

  const [filters, setFilters] = useState<{
    status?: Task["status"];
    priority?: Task["priority"];
  }>({});

  const handleStatusChange = (taskId: string, newStatus: string) => {
    const updatedTasks = tasksState.map((task) =>
      task.id === taskId ? { ...task, status: newStatus as Task["status"] } : task
    );
    setTaskState(updatedTasks);
  };

  const handleFilterChange = (filters: {
    status?: Task["status"];
    priority?: Task["priority"];
  }) => setFilters(filters);

  const filteredTasks = tasksState.filter((task) => {
    const matchesStatus = !filters.status || task.status === filters.status;
    const matchesPriority = !filters.priority || task.priority === filters.priority;
    return matchesStatus && matchesPriority;
  });

  return (
    <div className="max-w-lg mx-auto px-2">
      <TaskFilter onFilterChange={handleFilterChange} />
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={(id) => setTaskState(tasksState.filter((t) => t.id !== id))}
            onStatusChange={handleStatusChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
