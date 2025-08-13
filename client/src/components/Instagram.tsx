import useFetch from "@/hooks/useFetch";
import type { InstagramImages } from "@/interfaces/interface";
import { InstagramIcon } from "lucide-react";

export default function Instagram() {
  const { data: images } = useFetch<InstagramImages[]>("/api/instagram");

  return (
    <section className="flex flex-col gap-5 items-center mb-10">
      <div className="flex gap-3 font-semibold items-center">
        <InstagramIcon className="stroke-black/85 size-5 stroke-3" />
        <p>INSTAGRAM</p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-8">
        {images?.slice(17, 25).map((item) => (
          <div className="overflow-hidden" key={item._id}>
            <img
              src={item.image}
              alt=""
              className="aspect-square object-cover object-center hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
