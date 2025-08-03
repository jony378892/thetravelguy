import CommonTitile from "./CommonTitle";

export default function Featured() {
  return (
    <section className="my-8 custom-width  mx-auto">
      <CommonTitile title="Featured" />
      <div className="flex items-center justify-center gap-3 sm:gap-4 w-full mt-5">
        <img className="w-16 sm:w-24 md:w-32" src="/bbctravel.png" alt="" />
        <img className="w-16 sm:w-24 md:w-32" src="/nbcnews.png" alt="" />
        <img className="w-16 sm:w-24 md:w-32" src="/time.png" alt="" />
        <img className="w-16 sm:w-24 md:w-32" src="/usatoday.png" alt="" />
        <img className="w-16 sm:w-24 md:w-32" src="/travelleisure.png" alt="" />
      </div>
    </section>
  );
}
