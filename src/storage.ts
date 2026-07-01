import type { Task } from "./types.js";

// Sätt nyckel för Local Storage
const STORAGE_KEY = "module-tasks";

// Spara tasks
export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Ladda tasks
export function loadTasks(): Task[] {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  // Returnera tom lista
  if (savedTasks === null) {
    return [];
  }

  // Gör text till array
  return JSON.parse(savedTasks) as Task[];
}