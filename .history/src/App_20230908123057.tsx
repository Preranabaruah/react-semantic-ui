import { Button } from "semantic-ui-react";
import "./App.css";
import EventDashboard from "./features/events/event-dashboard";

function App() {
  return (
    <>
      <div>
        <h1>Re-Vents</h1>
        <Button icon="user" content="Click Here" color="green" />
        <EventDashboard />
      </div>
    </>
  );
}

export default App;
