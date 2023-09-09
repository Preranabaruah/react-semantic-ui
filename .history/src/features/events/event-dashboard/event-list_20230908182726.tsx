import EventListItems from "./event-list-item";

const EventList = ({ events }: any) => {
  return (
    <>
      {events.map((event: any, index: any) => {
        <EventListItems />;
      })}

      <EventListItems />
    </>
  );
};

export default EventList;
