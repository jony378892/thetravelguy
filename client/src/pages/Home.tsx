import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HomeCategory from "@/components/HomeCategory";
import TravelGuide from "@/components/TravelGuide";
import Destinations from "@/pages/Destinations";
import Getintouch from "@/components/Getintouch";

export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <HomeCategory />
      <Destinations />
      <TravelGuide />
      <Getintouch />
    </>
  );
}
