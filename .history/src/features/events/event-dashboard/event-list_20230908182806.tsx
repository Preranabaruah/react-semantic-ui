import EventListItems from "./event-list-item";

const EventList = (props) => {
  return (
    <>
      {props.events.map((event) => {
        <EventListItems />;
      })}
    </>
  );
};

export default EventList;
