import Calendar from "@/components/events/Calendar";
import EventTypes from "@/components/events/EventTypes";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Header headerString="EVENTS" />
      <EventTypes />
      <Calendar />
    </>
  );
};

export default Page;
