import EventTypes from "@/components/events/EventTypes";
import CalendarEvents from "@/components/events/CalendarEvents";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div>
      <Header headerString="EVENTS" />
      <EventTypes />
      <CalendarEvents />
    </div>
  );
};

export default Page;
