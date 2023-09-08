import { Grid } from "semantic-ui-react";
const EventDashboard = () => {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <h2>Left column</h2>
        </Grid.Column>
        <Grid.Column width={7}>
          <h2>Right column</h2>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EventDashboard;