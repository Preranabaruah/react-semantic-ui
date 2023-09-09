import EventListItems from "./event-list-item";

const EventList = ({ events }: any) => {
  return (
    <>
      {events.map((event: any) => {
        <EventListItems event={event} />;
      })}
    </>
  );
};

export default EventList;
