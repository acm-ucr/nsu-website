import Landing from "@/components/Home/Landing";
import Welcome from "@/components/Home/Welcome";
import Offer from "@/components/Home/Offer";
import AdditionalInfo from "@/components/Home/AdditionalInfo";
const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Landing />
      <Welcome />
      <Offer />
      <AdditionalInfo />
      NSU website
    </div>
  );
};

export default Home;
