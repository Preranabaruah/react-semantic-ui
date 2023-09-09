import EventListItems from "./event-list-item";
// import { sampleData } from "../../../api/index.js";

const EventList = () => {
  const sampleData = ["Tokyo"];
  return (
    <>
      <EventListItems data={sampleData} />
    </>
  );
};

export default EventList;
