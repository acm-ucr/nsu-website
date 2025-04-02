import EventsTitleSection from "@/components/events/TitleSection";
import Calendar from "@/components/events/Calendar";
import EventTypes from "@/components/events/EventTypes";
const Page = () => {
  return (
    <div>
      <EventsTitleSection />
      <EventTypes />
      <Calendar />
    </div>
  );
};

export default Page;
