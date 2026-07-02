import type { Task } from "./types.js"; // Hämtar Task-typen

const STORAGE_KEY = "tasks"; // Namnet jag använder i localStorage

export function saveTasks(tasks: Task[]): void { // Funktion som sparar tasks
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); // Gör arrayen till text och sparar den
}

export function loadTasks(): Task[] { // Funktion som laddar sparade tasks
  const savedTasks = localStorage.getItem(STORAGE_KEY); // Hämtar data från localStorage

  if (savedTasks === null) { // Om det inte finns något sparat
    return []; // Då får vi en tom array
  }

  return JSON.parse(savedTasks) as Task[]; // Gör texten tillbaka till en array
}