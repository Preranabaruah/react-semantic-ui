import EventListItems from "./event-list-item";
import { sampleData } from "../../../api/index.js";

interface Props {
  data: string;
}

const EventList = () => {
  return (
    <>
      <EventListItems data={sampleData} />;
    </>
  );
};

export default EventList;
