import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import TaskCard from "../components/TaskCard";
import { useTaskContext } from "../context/TaskContext";

const DashboardPage = () => {
  const { tasks, deleteTask } = useTaskContext();

  return (
    <Container className="mt-4">
      <h1>Course Task Dashboard</h1>

      <p>
        Manage assignments, knowledge checks, career tasks, and graduation
        milestones.
      </p>

      <Link to="/tasks/create">
        <Button className="mb-3">Create New Task</Button>
      </Link>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </Container>
  );
};

export default DashboardPage;
