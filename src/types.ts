export type Priority = "low" | "medium" | "high"; // Typ för vilka prioriteringar som är okej

export type Task = { // Typ för en task, så TypeScript vet hur en task ser ut
  id: number; // Unikt id så vi kan hitta rätt task
  name: string; // Namnet på tasken
  completed: boolean; // Visar om tasken är klar eller inte
  priority: Priority; // Prioritet: low, medium eller high
};