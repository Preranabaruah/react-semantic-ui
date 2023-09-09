import EventListItems from "./event-list-item";

const EventList = (props: any) => {
  return (
    <>
      {props.events.map((event) => {
        <EventListItems event={event} />;
      })}
    </>
  );
};

export default EventList;
