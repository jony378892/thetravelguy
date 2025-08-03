import CommonTitile from "@/components/CommonTitle";
import { travelData } from "@/Data/travelData";

export default function Gallery() {
  return (
    <section className="flex flex-col gap-8 custom-width mx-auto my-24 p-3">
      <CommonTitile title="Gallery" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {travelData.map((data) => {
          return <img src={data.image} alt={data.title} />;
        })}
      </div>
    </section>
  );
}
