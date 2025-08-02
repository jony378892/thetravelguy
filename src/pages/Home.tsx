import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HomeCategory from "@/components/HomeCategory";
import TravelGuide from "@/components/TravelGuide";
import Destinations from "@/components/Destinations";
import Instagram from "@/components/Instagram";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <HomeCategory />
      <TravelGuide />
      <Destinations />
      <Instagram />
      <Newsletter />
    </>
  );
}
