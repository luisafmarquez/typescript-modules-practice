import type { Task } from "./types.js";

// Beskriv knapp-funktioner
type RenderOptions = {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

// Visa alla tasks
export function renderTasks(
  tasks: Task[],
  taskList: HTMLUListElement,
  options: RenderOptions
): void {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = renderTask(task, options);
    taskList.appendChild(li);
  });
}

// Visa en task
function renderTask(task: Task, options: RenderOptions): HTMLLIElement {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.status === "completed";

  const span = document.createElement("span");
  span.textContent = `${task.name} - ${task.priority}`;

  if (task.status === "completed") {
    span.style.textDecoration = "line-through";
  }

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Ta bort";

  // Ändra status
  checkbox.addEventListener("change", () => {
    options.onToggle(task.id);
  });

  // Ta bort task
  deleteButton.addEventListener("click", () => {
    options.onDelete(task.id);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  return li;
}