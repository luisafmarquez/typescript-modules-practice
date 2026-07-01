import type { TaskPriority } from "./types.js";

// Beskriv formulär-funktion
type FormOptions = {
  onAdd: (name: string, priority: TaskPriority) => void;
};

// Starta formulär
export function setupForm(
  taskForm: HTMLFormElement,
  taskInput: HTMLInputElement,
  priorityInput: HTMLSelectElement,
  options: FormOptions
): void {
  taskForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    const taskPriority = priorityInput.value as TaskPriority;

    // Stoppa tom task
    if (taskName === "") {
      return;
    }

    // Lägg till task
    options.onAdd(taskName, taskPriority);

    // Töm formulär
    taskInput.value = "";
    priorityInput.value = "medium";
  });
}