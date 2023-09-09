import EventListItems from "./event-list-item";

const EventList = (props: any) => {
  return (
    <>
      {props.events.map((event: any) => {
        <EventListItems />;
      })}
    </>
  );
};

export default EventList;
