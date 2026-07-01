// Beskriv task-status
export type TaskStatus = "pending" | "completed";

// Beskriv task-prioritet
export type TaskPriority = "low" | "medium" | "high";

// Beskriv en task
export type Task = {
  id: number;
  name: string;
  priority: TaskPriority;
  status: TaskStatus;
};