import type { Task } from "./types.js"; // Hämtar Task-typen
import { deleteTask, getTasks, toggleTask } from "./tasks.js"; // Hämtar task-funktioner
import { saveTasks } from "./storage.js"; // Hämtar saveTasks så ändringar sparas

const taskList = document.querySelector("#task-list") as HTMLUListElement; // Hämtar listan från HTML
const stats = document.querySelector("#stats") as HTMLParagraphElement; // Hämtar statistiktexten

export function renderTasks(): void { // Funktion som visar alla tasks på sidan
  taskList.innerHTML = ""; // Tömmer listan först så det inte blir dubbelt

  const tasks = getTasks(); // Hämtar alla tasks från arrayen

  tasks.forEach((task: Task) => { // Går igenom varje task, en i taget
    const li = document.createElement("li"); // Skapar en ny list-rad

    li.textContent = `${task.name} - ${task.priority}`; // Skriver ut namn och prioritet

    if (task.completed) { // Om tasken är klar
      li.style.textDecoration = "line-through"; // Då får den streck över texten
    }

    li.addEventListener("click", () => { // När man klickar på tasken
      toggleTask(task.id); // Byter status completed/pending
      saveTasks(getTasks()); // Sparar nya listan i localStorage
      renderTasks(); // Ritar om listan direkt
    });

    const deleteButton = document.createElement("button"); // Skapar delete-knapp

    deleteButton.textContent = "Delete"; // Text på knappen

    deleteButton.addEventListener("click", (event) => { // När man klickar på delete
      event.stopPropagation(); // Stoppar så li-klick inte också körs
      deleteTask(task.id); // Tar bort rätt task
      saveTasks(getTasks()); // Sparar ändringen
      renderTasks(); // Ritar om listan
    });

    li.appendChild(deleteButton); // Lägger delete-knappen i li
    taskList.appendChild(li); // Lägger li i ul-listan
  });

  renderStats(); // Uppdaterar statistiken
}

function renderStats(): void { // Funktion för statistik
  const tasks = getTasks(); // Hämtar alla tasks
  const completed = tasks.filter((task) => task.completed).length; // Räknar klara tasks

  stats.textContent = `Total: ${tasks.length} | Completed: ${completed}`; // Visar total och completed
}