import CommonTitile from "@/components/CommonTitle";
import useFetch from "@/hooks/useFetch";
import type { TravelData } from "@/interfaces/interface";

export default function Gallery() {
  const { loading, data } = useFetch<TravelData[]>("/api/travels");

  if (loading || !data) {
    return (
      <section className="custom-width mx-auto my-20 text-center">
        <p className="text-lg text-black/70">Loading destinations...</p>
      </section>
    );
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
