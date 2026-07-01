import type { Task, TaskPriority } from "./types.js";
import { loadTasks, saveTasks } from "./storage.js";
import { addTask, deleteTask, toggleTask } from "./tasks.js";
import { renderTasks } from "./render.js";
import { setupForm } from "./form.js";

// Hämta HTML-element
const taskForm = document.querySelector("#task-form") as HTMLFormElement;
const taskInput = document.querySelector("#task-input") as HTMLInputElement;
const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement;
const taskList = document.querySelector("#task-list") as HTMLUListElement;

// Ladda tasks
let tasks: Task[] = loadTasks();

// Uppdatera appen
function updateApp(): void {
  saveTasks(tasks);

  renderTasks(tasks, taskList, {
    onToggle: handleToggleTask,
    onDelete: handleDeleteTask
  });
}

// Lägg till task
function handleAddTask(name: string, priority: TaskPriority): void {
  tasks = addTask(tasks, name, priority);
  updateApp();
}

// Ändra task-status
function handleToggleTask(id: number): void {
  tasks = toggleTask(tasks, id);
  updateApp();
}

// Ta bort task
function handleDeleteTask(id: number): void {
  tasks = deleteTask(tasks, id);
  updateApp();
}

// Starta formulär
setupForm(taskForm, taskInput, priorityInput, {
  onAdd: handleAddTask
});

// Visa tasks när sidan öppnas
renderTasks(tasks, taskList, {
  onToggle: handleToggleTask,
  onDelete: handleDeleteTask
});