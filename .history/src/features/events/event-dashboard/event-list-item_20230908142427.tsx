import { Item, Segment, Icon } from "semantic-ui-react";

const EventListItems = () => {
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
            <Icon name="marker" /> venue
          </span>
        </Segment>
      </Segment.Group>
    </>
  );
};

export default EventListItems;
