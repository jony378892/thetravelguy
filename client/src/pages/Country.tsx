import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { api } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export default function Country() {
  const { country } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["country"],
    queryFn: async () => {
      const data = await api.get(`/api/destination/${country}`);
      return data.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="custom-width mx-auto py-20 px-3">
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
            <h2 className="text-lg font-semibold text-secondary">Safety</h2>
            <p className="text-gray-700 mt-1">{data.description.safety}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              Travel Guide
            </h2>
            <p className="text-gray-700 mt-1">
              {data.description.travel_guide}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">Local Food</h2>
            <p className="text-gray-700 mt-1">{data.description.local_food}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              Language Tip
            </h2>
            <p className="text-gray-700 mt-1">
              {data.description.language_tip}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              Currency Info
            </h2>
            <p className="text-gray-700 mt-1">
              {data.description.currency_info}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary">
              Personal Experience
            </h2>
            <p className="text-gray-700 mt-1 italic">"{data.experience}"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
