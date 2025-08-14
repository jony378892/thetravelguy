import { Plane } from "lucide-react";
import { Link, useLocation } from "react-router";
import CommonTitle from "@/components/CommonTitle";
import useFetch from "@/hooks/useFetch";
import type { DestinationData } from "@/interfaces/interface";
import { TravelSkeleton } from "@/components/TravelSkeleton";

export default function Destinations() {
  const { data: destinations, loading } =
    useFetch<DestinationData[]>("/api/destinations");
  const path = useLocation().pathname;

  return (
    <section className="flex flex-col gap-5 items-center custom-width mx-auto mb-10 mt-16 p-3">
      <CommonTitle title="Destinations" />
      <p className="text-xl md:text-2xl text-center text-black/70">
        Pick a country and start exploring
      </p>
      {!destinations || loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-y-14 mt-8">
          {Array.from({ length: 15 }).map((_, index) => (
            <TravelSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-y-14 mt-8">
          {destinations?.map((data) => {
            return (
              <Link
                to={`/destination/${data.country}`}
                key={data._id}
                className="flex flex-col gap-4 items-center"
              >
                <img src={data.image} alt={data.title} className="rounded-md" />
                <h3 className="text-center text-xl lg:text-2xl hover:font-semibold hover:text-secondary cursor-pointer">
                  {data.country}
                </h3>
              </Link>
            );
          })}
        </div>
      )}
      {path === "/" && (
        <Link to="/destinations">
          <button className="flex items-center px-8 py-5 gap-3 my-10 border border-black  shadow-lg hover:shadow-2xl cursor-pointer">
            <Plane className="size-6 stroke-1" />
            <p className="text-lg font-extralight tracking-tighter">
              MORE DESTINATIONS
            </p>
          </button>
        </Link>
      )}
    </section>
  );
}
