import EventListItems from "./event-list-item";
import { sampleData } from "../../../app/api/index.js";

const EventList = () => {
  return (
    <>
      <EventListItems data={sampleData} />
    </>
  );
};

export default EventList;
