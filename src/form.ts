import type { Priority } from "./types.js"; // Hämtar Priority-typen
import { addTask, getTasks } from "./tasks.js"; // Hämtar funktioner för tasks
import { saveTasks } from "./storage.js"; // Hämtar funktion för att spara
import { renderTasks } from "./render.js"; // Hämtar funktion som visar tasks

const form = document.querySelector("#task-form") as HTMLFormElement; // Hämtar formuläret
const taskInput = document.querySelector("#task-input") as HTMLInputElement; // Hämtar inputfältet
const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement; // Hämtar dropdown
const errorMessage = document.querySelector("#error-message") as HTMLParagraphElement; // Hämtar plats för felmeddelande

export function setupForm(): void { // Startar formulärets funktion
  form.addEventListener("submit", handleSubmit); // Lyssnar på submit, inte click
}

function handleSubmit(event: SubmitEvent): void { // Körs när formuläret skickas
  event.preventDefault(); // Stoppar sidan från att laddas om

  const name = taskInput.value.trim(); // Hämtar text och tar bort extra mellanslag
  const priority = priorityInput.value as Priority; // Hämtar prioritet och säger typen till TypeScript

  const error = validateTask(name); // Kollar om tasken är okej

  if (error !== "") { // Om det finns fel
    errorMessage.textContent = error; // Visar felet på sidan
    return; // Stoppar funktionen här
  }

  errorMessage.textContent = ""; // Tar bort gammalt felmeddelande

  addTask(name, priority); // Lägger till ny task i arrayen

  saveTasks(getTasks()); // Sparar nya listan i localStorage

  renderTasks(); // Visar listan igen

  clearForm(); // Tömmer formuläret
}

function validateTask(name: string): string { // Funktion som kontrollerar input
  if (name === "") { // Om namnet är tomt
    return "Task name cannot be empty."; // Returnerar feltext
  }

  if (name.length < 3) { // Om namnet är för kort
    return "Task name must be at least 3 characters."; // Returnerar feltext
  }

  if (name.length > 40) { // Om namnet är för långt
    return "Task name cannot be more than 40 characters."; // Returnerar feltext
  }

  return ""; // Om allt är okej finns inget fel
}

function clearForm(): void { // Funktion som återställer formuläret
  taskInput.value = ""; // Tömmer textfältet
  priorityInput.value = "medium"; // Sätter tillbaka prioritet till medium
}