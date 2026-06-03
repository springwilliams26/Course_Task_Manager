import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const HomePage = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Container className="mt-5">
      <h1>Course Task Manager</h1>

      <p>
        Track Coding Temple assignments, knowledge checks, career tasks, and
        graduation milestones.
      </p>

      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      )}

      {isAuthenticated && (
        <>
          <p>Welcome, {user?.name || user?.email}!</p>

          <Link to="/dashboard">
            <Button className="me-2">Go to Dashboard</Button>
          </Link>

          <Button
            variant="secondary"
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Log Out
          </Button>
        </>
      )}
    </Container>
  );
};

export default HomePage;
