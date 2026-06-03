import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import type { Task } from "../types/Task";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskCard = ({ task, onDelete }: TaskCardProps) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>

        <Card.Text>
          <strong>Module:</strong> {task.module}
          <br />
          <strong>Category:</strong> {task.category}
          <br />
          <strong>Status:</strong> {task.status}
          <br />
          <strong>Priority:</strong> {task.priority}
          <br />
          <strong>Due Date:</strong> {task.dueDate}
        </Card.Text>

        <Link to={`/tasks/${task.id}`}>
          <Button className="me-2" variant="primary">
            View Details
          </Button>
        </Link>

        <Link to={`/tasks/${task.id}/edit`}>
          <Button className="me-2" variant="warning">
            Edit
          </Button>
        </Link>

        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
