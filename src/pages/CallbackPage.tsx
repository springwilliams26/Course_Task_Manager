import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";

const CallbackPage = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <Container className="mt-5 text-center">
      <Spinner animation="border" />
      <h3>Signing you in...</h3>
    </Container>
  );
};

export default CallbackPage;
