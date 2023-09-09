import EventListItems from "./event-list-item";
import { sampleData } from "./src/api/index";

const EventList = () => {
  return (
    <>
      <EventListItems data={sampleData} />;
    </>
  );
};

export default EventList;
