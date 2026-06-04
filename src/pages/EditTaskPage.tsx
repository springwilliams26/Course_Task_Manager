import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useTaskContext } from "../context/TaskContext";
import type { Task } from "../types/Task";

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, updateTask } = useTaskContext();

  const taskId = Number(id);
  const task = getTaskById(taskId);

  const [title, setTitle] = useState(task?.title || "");
  const module = task?.module || "";

  const [category, setCategory] = useState<
    "Assignment" | "Knowledge Check" | "Career" | "Graduation"
  >(task?.category || "Assignment");

  const [status, setStatus] = useState<
    "Not Started" | "In Progress" | "Completed"
  >(task?.status || "Not Started");

  const [priority, setPriority] = useState<"Low" | "Medium" | "High">(
    task?.priority || "Medium",
  );

  const [dueDate, setDueDate] = useState(task?.dueDate || "");
  const [notes, setNotes] = useState(task?.notes || "");
  const [titleError, setTitleError] = useState("");

  if (!task) {
    return (
      <Container className="mt-4">
        <h2>Task Not Found</h2>
      </Container>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitleError("Task title is required");
      return;
    }

    setTitleError("");

    const updatedTask: Task = {
      id: taskId,
      title,
      module,
      category,
      status,
      priority,
      dueDate,
      notes,
    };

    updateTask(updatedTask);
    navigate("/dashboard");
  };

  return (
    <Container className="mt-4">
      <Card className="mx-auto" style={{ maxWidth: "700px" }}>
        <Card.Body>
          <h1>Edit Task</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setTitleError("");
                }}
              />

              {titleError && (
                <div className="text-danger mt-1">{titleError}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Module</Form.Label>
              <Form.Control value={module} readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Select task category"
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value as
                      | "Assignment"
                      | "Knowledge Check"
                      | "Career"
                      | "Graduation",
                  )
                }
              >
                <option>Assignment</option>
                <option>Knowledge Check</option>
                <option>Career</option>
                <option>Graduation</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Select task status"
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value as
                      | "Not Started"
                      | "In Progress"
                      | "Completed",
                  )
                }
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Select
                aria-label="Select task priority"
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value as "Low" | "Medium" | "High")
                }
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="warning">
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditTaskPage;
