import EventListItems from "./event-list-item";

const EventList = ({ events }) => {
  return (
    <>
      {events.map((event, index) => {
        <EventListItems event={event} />;
      })}
    </>
  );
};

export default EventList;
