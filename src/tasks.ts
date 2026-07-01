import type { Task, TaskPriority } from "./types.js";

// Skapa ny task
export function addTask(
  tasks: Task[],
  name: string,
  priority: TaskPriority
): Task[] {
  const newTask: Task = {
    id: Date.now(),
    name: name,
    priority: priority,
    status: "pending"
  };

  return [...tasks, newTask];
}

// Ta bort task
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

// Ändra status
export function toggleTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        status: task.status === "completed" ? "pending" : "completed"
      };
    }

    return task;
  });
}