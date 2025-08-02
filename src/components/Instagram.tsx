import { travelData } from "@/Data/travelData";
import type { TravelData } from "@/interfaces/interface";
import { InstagramIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Instagram() {
  const [destinations, setDestinations] = useState<TravelData[] | null>(null);

  useEffect(() => {
    setDestinations(travelData.slice(17, 25));
  }, []);

  return (
    <section className="flex flex-col gap-5 items-center mb-10">
      <div className="flex gap-3 font-semibold items-center">
        <InstagramIcon className="stroke-black/85 size-5 stroke-3" />
        <p>INSTAGRAM</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
        {destinations?.map((data) => {
          return (
            <div className="overflow-hidden " key={data.id}>
              <img
                src={data.image}
                alt=""
                className="aspect-square object-cover object-center hover:scale-105 transition-all duration-500"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
