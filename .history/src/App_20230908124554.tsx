import EventDashboard from "./features/events/event-dashboard";
import NavBar from "./features/nav-bar";

function App() {
  return (
    <>
      <div>
        <h1>Re-Vents</h1>
        <EventDashboard />
        <NavBar />
      </div>
    </>
  );
}

export default App;
