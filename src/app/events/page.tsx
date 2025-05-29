import {Calendar} from "@/components/ui/calendar";
import EventTypes from "@/components/events/EventTypes";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div>
      <Header headerString="EVENTS" />
      <EventTypes />
      <Calendar/>
    </div>
  );
};

export default Page;
