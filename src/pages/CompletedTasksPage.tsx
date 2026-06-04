import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import TaskCard from "../components/TaskCard";
import { useTaskContext } from "../context/TaskContext";

const CompletedTasksPage = () => {
  const { tasks, deleteTask } = useTaskContext();

  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <Container className="mt-4">
      <h1>Completed Tasks</h1>

      <p>Review completed coursework, assignments, and milestones.</p>

      <Link to="/dashboard">
        <Button className="mb-3" variant="secondary">
          Back to Dashboard
        </Button>
      </Link>

      {completedTasks.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        completedTasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={deleteTask} />
        ))
      )}
    </Container>
  );
};

export default CompletedTasksPage;
