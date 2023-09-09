import EventListItems from "./event-list-item";

const EventList = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        <EventListItems event={event} />;
      })}
    </>
  );
};

export default EventList;
