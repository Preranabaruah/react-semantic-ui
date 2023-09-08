import { Header, Segment, Form } from "semantic-ui-react";

const EventForm = () => {
  return (
    <>
      <Segment>
        <Header content="Create a new Event" />
        <Form>
          <Form.Field>
            <input type="text" placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Categories" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Cities" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Venue" />
          </Form.Field>
          <Form.Field>
            <input type="date" placeholder="Date" />
          </Form.Field>
        </Form>
      </Segment>
    </>
  );
};

export default EventForm;
