import CommonTitile from "@/components/CommonTitle";
import Error from "@/components/Error";
import type { DestinationData } from "@/interfaces/interface";
import { api } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export default function Gallery() {
  const { data, isLoading, error } = useQuery<DestinationData[]>({
    queryKey: ["travels"],
    queryFn: async () => {
      const data = await api.get(`/api/travels`);
      return data.data;
    },
  });

  if (isLoading) {
    return <p className="text-center">Loading....</p>;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="flex flex-col gap-8 custom-width mx-auto my-24 p-3">
      <CommonTitile title="Gallery" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {data?.map((data) => {
          return <img key={data._id} src={data.image} alt={data.title} />;
        })}
      </div>
    </section>
  );
}
