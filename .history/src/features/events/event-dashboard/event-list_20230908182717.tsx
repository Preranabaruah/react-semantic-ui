import EventListItems from "./event-list-item";

const EventList = ({ events }: any) => {
  return (
    <>
      {events.map((event, index) => {
        <EventListItems />;
      })}

      <EventListItems />
    </>
  );
};

export default EventList;
