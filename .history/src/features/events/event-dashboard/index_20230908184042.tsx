import { Grid } from "semantic-ui-react";
import EventList from "./event-list";
import EventForm from "../event-form";

const EventDashboard = () => {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={sampleData} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventForm />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EventDashboard;
