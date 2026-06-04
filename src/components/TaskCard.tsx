import { Link } from "react-router-dom";
import { Badge, Button, Card } from "react-bootstrap";
import type { Task } from "../types/Task";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskCard = ({ task, onDelete }: TaskCardProps) => {
  const getStatusVariant = () => {
    switch (task.status) {
      case "Completed":
        return "success";

      case "In Progress":
        return "primary";

      default:
        return "secondary";
    }
  };
  return (
    <Card
      className="mb-4 shadow-sm"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Card.Body>
        <Card.Title className="text-center mb-4" style={{ fontSize: "1.6rem" }}>
          {task.title}
        </Card.Title>

        <Card.Text className="text-start mx-auto" style={{ maxWidth: "500px" }}>
          <strong>Module:</strong> {task.module}
          <br />
          <strong>Category:</strong> {task.category}
          <br />
          <strong>Status:</strong>{" "}
          <Badge bg={getStatusVariant()}>{task.status}</Badge>
          <br />
          <strong>Priority:</strong> {task.priority}
          <br />
          <strong>Due Date:</strong> {task.dueDate}
        </Card.Text>

        <div className="text-center mt-4">
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
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
