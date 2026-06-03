export interface Task {
  id: number;
  title: string;
  module: string;
  category: "Assignment" | "Knowledge Check" | "Career" | "Graduation";
  status: "Not Started" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  notes: string;
}
