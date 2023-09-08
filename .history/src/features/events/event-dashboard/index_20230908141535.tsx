import { Grid } from "semantic-ui-react";
import EventList from "./event-list";
const EventDashboard = () => {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
         <EventList>
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Right column</h2>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EventDashboard;
