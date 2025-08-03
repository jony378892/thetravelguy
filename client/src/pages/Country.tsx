import { travelData } from "@/Data/travelData";
import type { TravelData } from "@/interfaces/interface";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Country() {
  const [data, setData] = useState<TravelData | null>(null);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const tempData = travelData.find((d) => d.country === path);
    if (tempData) {
      setData(tempData);
    }
  }, [path]);

  if (!data) {
    return <p>No data found for country {path}</p>;
  }

  return (
    <section className="custom-width mx-auto py-20">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-[600px] object-cover object-top"
        />
      </div>

      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <p className="text-lg text-gray-500 mb-4">Country: {data.country}</p>

        <div className="space-y-6 mt-6">
          <div>
            <h2 className="text-2xl font-semibold text-teal-600">Safety</h2>
            <p className="text-gray-700 mt-1">{data.description.safety}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-600">
              Travel Guide
            </h2>
            <p className="text-gray-700 mt-1">
              {data.description.travel_guide}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-600">Local Food</h2>
            <p className="text-gray-700 mt-1">{data.description.local_food}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-600">
              Language Tip
            </h2>
            <p className="text-gray-700 mt-1">
              {data.description.language_tip}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-600">
              Currency Info
            </h2>
            <p className="text-gray-700 mt-1">
              {data.description.currency_info}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-600">
              Personal Experience
            </h2>
            <p className="text-gray-700 mt-1 italic">"{data.experience}"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
