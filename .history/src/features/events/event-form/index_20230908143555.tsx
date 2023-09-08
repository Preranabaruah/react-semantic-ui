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
        </Form>
      </Segment>
    </>
  );
};

export default EventForm;
