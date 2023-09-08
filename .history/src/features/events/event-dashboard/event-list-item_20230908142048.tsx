import { Item, Segment } from "semantic-ui-react";

const EventListItems = () => {
  return (
    <>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src="/public/assets/user.png" />
              <Item.Content>
                <Item.Header content="Events" />
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
    </>
  );
};

export default EventListItems;
