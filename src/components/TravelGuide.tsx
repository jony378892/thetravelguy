import CommonTitile from "./CommonTitile";
import { travelData } from "@/Data/travelData";

export default function TravelGuide() {
  return (
    <section className="flex flex-col gap-5 custom-width mx-auto mb-10 p-3">
      <CommonTitile title="Travel Guides" />
      <p className="text-xl md:text-2xl text-center text-black/70">
        Popular travel blog posts & guides
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-y-14 mt-8">
        {travelData.map((data) => {
          return (
            <div key={data.id} className="flex flex-col gap-4 items-center">
              <img src={data.image} alt={data.title} className="rounded-md" />
              <h3 className="text-center text-xl lg:text-2xl">{data.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
