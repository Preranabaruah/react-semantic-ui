import { Container } from "semantic-ui-react";
import EventDashboard from "./features/events/event-dashboard";
import NavBar from "./features/nav-bar";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Container>
          <EventDashboard />
        </Container>
      </div>
    </>
  );
}

export default App;
