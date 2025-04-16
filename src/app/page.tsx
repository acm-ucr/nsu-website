import Landing from "@/components/Home/Landing";
import Welcome from "@/components/Home/Welcome";
import Offer from "@/components/Home/Offer";
import AdditionalInfo from "@/components/Home/AdditionalInfo";
import JoinUsButton from "@/components/Home/JoinUsButton";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Landing />
      <Welcome />
      <Offer />
      <JoinUsButton />
      <AdditionalInfo />
    </div>
  );
};

export default Home;
