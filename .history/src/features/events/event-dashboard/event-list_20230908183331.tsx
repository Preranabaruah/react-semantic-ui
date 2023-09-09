import EventListItems from "./event-list-item";

const EventList = ({ events }: any) => {
  return (
    <>
      {props.events.map((event: any) => {
        <EventListItems event={event} />;
      })}
    </>
  );
};

export default EventList;
