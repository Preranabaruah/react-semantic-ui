import { Item, Segment, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./event-list-attendee";

const EventListItems = ({ data }: any) => {
  return (
    <>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src="/public/assets/user.png" />
              <Item.Content>
                <Item.Header content="Event Title" />
                <Item.Description>Hosted by Bob</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> Date
            <Icon name="marker" /> Venue
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            <EventListAttendee />
            <EventListAttendee />
            <EventListAttendee />
          </List>
        </Segment>
        <Segment clearing>
          <div>Description of Event</div>
          <Button content="View More" floated="right" color="teal" />
        </Segment>
      </Segment.Group>
    </>
  );
};

export default EventListItems;
