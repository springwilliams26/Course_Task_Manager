import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import TaskCard from "../components/TaskCard";
import { useTaskContext } from "../context/TaskContext";

const DashboardPage = () => {
  const { tasks, deleteTask } = useTaskContext();

  const activeTasks = tasks.filter((task) => task.status !== "Completed");

  const completedTasks = tasks.filter((task) => task.status === "Completed");

  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");

  const notStartedTasks = tasks.filter((task) => task.status === "Not Started");

  return (
    <Container className="mt-4">
      <h1>Course Task Dashboard</h1>

      <p>
        Manage active assignments, knowledge checks, career tasks, and
        graduation milestones.
      </p>

      <Row className="mb-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total Tasks</Card.Title>
              <h2>{tasks.length}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Not Started</Card.Title>
              <h2>{notStartedTasks.length}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>In Progress</Card.Title>
              <h2>{inProgressTasks.length}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Completed</Card.Title>
              <h2>{completedTasks.length}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Link to="/tasks/create">
        <Button className="mb-3 me-2">Create New Task</Button>
      </Link>

      <Link to="/completed">
        <Button className="mb-3" variant="success">
          View Completed Tasks
        </Button>
      </Link>

      <h2>Active Tasks</h2>

      {activeTasks.length === 0 ? (
        <p>No active tasks. Great job!</p>
      ) : (
        activeTasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={deleteTask} />
        ))
      )}
    </Container>
  );
};

export default DashboardPage;
