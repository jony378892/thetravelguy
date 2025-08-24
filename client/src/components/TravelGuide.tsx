import CommonTitile from "./CommonTitle";
import { Link } from "react-router";
import { TravelSkeleton } from "./TravelSkeleton";
import { api } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import type { DestinationData } from "@/interfaces/interface";

export default function TravelGuide() {
  const { data: travelData, isLoading } = useQuery<DestinationData[]>({
    queryKey: ["travelData"],
    queryFn: async () => {
      const data = await api.get("/api/destinations");
      return data.data;
    },
  });

  return (
    <section className="flex flex-col gap-5 custom-width mx-auto mb-10 p-3">
      <CommonTitile title="Travel Guides" />
      <p className="text-xl md:text-2xl text-center text-black/70">
        Popular travel blog posts & guides
      </p>
      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-y-14 mt-8">
          {Array.from({ length: 15 }).map((_, index) => (
            <TravelSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-y-14 mt-8">
          {travelData?.map((data) => {
            return (
              <Link
                to={`/destination/${data.country}`}
                key={data._id}
                className="flex flex-col gap-4 items-center"
              >
                <img src={data.image} alt={data.title} className="rounded-md" />
                <h3 className="text-center text-xl lg:text-2xl hover:font-semibold hover:text-secondary cursor-pointer">
                  {data.title}
                </h3>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
