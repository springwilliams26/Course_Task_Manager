import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Task } from "../types/Task";

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: number) => void;
  getTaskById: (id: number) => Task | undefined;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const starterTasks: Task[] = [
  {
    id: 1,
    title: "Task Management App with TypeScript",
    module: "FE Module 1",
    category: "Assignment",
    status: "In Progress",
    priority: "High",
    dueDate: "2026-06-03",
    notes:
      "First Front End assignment using TypeScript, Context API, Auth0, and typed state.",
  },
  {
    id: 2,
    title: "Knowledge Check 2",
    module: "FE Module 1",
    category: "Knowledge Check",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-03",
    notes: "Complete after React Query and Redux Toolkit lessons.",
  },
  {
    id: 3,
    title: "Advanced React E-Commerce App",
    module: "FE Module 1",
    category: "Assignment",
    status: "Not Started",
    priority: "High",
    dueDate: "2026-06-03",
    notes: "Module project for advanced React concepts.",
  },
  {
    id: 4,
    title: "Firebase Integration Assignment",
    module: "FE Module 2",
    category: "Assignment",
    status: "Not Started",
    priority: "High",
    dueDate: "2026-06-03",
    notes: "Implement Firebase into the React e-commerce app.",
  },
  {
    id: 5,
    title: "Knowledge Check 1",
    module: "FE Module 2",
    category: "Knowledge Check",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-03",
    notes: "Covers Firebase authentication and Firestore concepts.",
  },
  {
    id: 6,
    title: "Knowledge Check 2",
    module: "FE Module 2",
    category: "Knowledge Check",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-03",
    notes: "Covers CI/CD, deployment, and testing concepts.",
  },
  {
    id: 7,
    title: "CI/CD Pipeline Project",
    module: "FE Module 2",
    category: "Assignment",
    status: "Not Started",
    priority: "High",
    dueDate: "2026-06-03",
    notes:
      "Final Front End project focused on GitHub Actions and deployment workflow.",
  },
  {
    id: 8,
    title: "Advanced API Development Project",
    module: "BE Module 1",
    category: "Assignment",
    status: "Not Started",
    priority: "High",
    dueDate: "2026-06-04",
    notes:
      "Backend Module 1 project covering SQLAlchemy, REST APIs, authentication, and queries.",
  },
  {
    id: 9,
    title: "Knowledge Check 1",
    module: "BE Module 1",
    category: "Knowledge Check",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-04",
    notes: "Covers database design, ORMs, REST APIs, and design patterns.",
  },
  {
    id: 10,
    title: "Knowledge Check 2",
    module: "BE Module 1",
    category: "Knowledge Check",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-04",
    notes:
      "Covers token authentication, advanced queries, and junction tables.",
  },
  {
    id: 11,
    title: "Documentation and Testing Assignment",
    module: "BE Module 2",
    category: "Assignment",
    status: "Not Started",
    priority: "High",
    dueDate: "2026-06-04",
    notes: "Backend assignment focused on API documentation and testing.",
  },
  {
    id: 12,
    title: "Knowledge Check 1",
    module: "BE Module 2",
    category: "Knowledge Check",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-04",
    notes: "Covers API documentation, TDD, and unit testing.",
  },
  {
    id: 13,
    title: "Knowledge Check 2",
    module: "BE Module 2",
    category: "Knowledge Check",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-04",
    notes:
      "Covers deployment, CI/CD, and frontend/backend connection using Auth0.",
  },
  {
    id: 14,
    title: "API Deployment and CI/CD Project",
    module: "BE Module 2",
    category: "Assignment",
    status: "Not Started",
    priority: "High",
    dueDate: "2026-06-04",
    notes: "Final backend project for deployment and CI/CD pipeline.",
  },
  {
    id: 15,
    title: "Ready to Graduate",
    module: "Graduation",
    category: "Graduation",
    status: "Not Started",
    priority: "High",
    dueDate: "2026-06-04",
    notes: "Final graduation requirement after completing all coursework.",
  },
  {
    id: 16,
    title: "First LinkedIn Post",
    module: "Career Path",
    category: "Career",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-04",
    notes: "Create and publish first LinkedIn post for career visibility.",
  },
  {
    id: 17,
    title: "Becoming a Freelancer Module",
    module: "Career Path",
    category: "Career",
    status: "Not Started",
    priority: "Medium",
    dueDate: "2026-06-04",
    notes: "Complete freelancer career path module.",
  },
];

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(starterTasks);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const getTaskById = (id: number) => {
    return tasks.find((task) => task.id === id);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        getTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used inside TaskProvider");
  }

  return context;
};
