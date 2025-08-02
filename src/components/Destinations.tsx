import { travelData } from "@/Data/travelData";
import CommonTitile from "./CommonTitile";
import { useEffect, useState } from "react";
import type { TravelData } from "@/interfaces/interface";
import { Plane } from "lucide-react";

export default function Destinations() {
  const [destinations, setDestinations] = useState<TravelData[] | null>(null);

  useEffect(() => {
    setDestinations(travelData.slice(0, 9));
  }, []);

  return (
    <section className="flex flex-col gap-5 items-center custom-width mx-auto mb-10 p-3">
      <CommonTitile title="Destinations" />
      <p className="text-xl md:text-2xl text-center text-black/70">
        Pick a country and start exploring
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-y-14 mt-8">
        {destinations?.map((data) => {
          return (
            <div key={data.id} className="flex flex-col gap-4 items-center">
              <img src={data.image} alt={data.title} className="rounded-md" />
              <h3 className="text-center text-xl lg:text-2xl">
                {data.country}
              </h3>
            </div>
          );
        })}
      </div>
      <button className="flex items-center px-8 py-5 gap-3 my-10 border border-black  shadow-lg hover:shadow-2xl cursor-pointer">
        <Plane className="size-6 stroke-1" />
        <p className="text-lg font-extralight tracking-tighter">
          MORE DESTINATIONS
        </p>
      </button>
    </section>
  );
}
