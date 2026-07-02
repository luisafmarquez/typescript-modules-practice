import type { Priority, Task } from "./types.js"; // Hämtar typerna

let tasks: Task[] = []; // Här sparas alla tasks i en array

export function setTasks(savedTasks: Task[]): void { // Lägger in sparade tasks när appen startar
  tasks = savedTasks; // Ersätter tom array med sparad data
}

export function getTasks(): Task[] { // Funktion för att hämta alla tasks
  return tasks; // Returnerar arrayen
}

export function addTask(name: string, priority: Priority): void { // Skapar en ny task
  const newTask: Task = { // Här bygger jag själva task-objektet
    id: Date.now(), // Jag använder tiden som enkelt unikt id
    name: name, // Namnet kommer från input
    completed: false, // Ny task börjar som inte klar
    priority: priority, // Prioritet kommer från dropdown
  };

  tasks.push(newTask); // Lägger in tasken i arrayen
}

export function toggleTask(id: number): void { // Byter mellan completed och pending
  const task = tasks.find((task) => task.id === id); // Letar efter task med rätt id

  if (task) { // Om tasken finns
    task.completed = !task.completed; // Byter sant/falskt, alltså klar/inte klar
  }
}

export function deleteTask(id: number): void { // Tar bort en task
  tasks = tasks.filter((task) => task.id !== id); // Behåller alla tasks utom den med rätt id
}