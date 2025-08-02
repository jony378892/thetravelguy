import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Newsletter() {
  return (
    <section className="flex flex-col items-center gap-7 mb-10 p-3">
      <h3 className="text-3xl font-semibold">Newsletter</h3>
      <p className="text-black/70 text-sm text-center ">
        Subscribe to my newsletter for the latest blog posts, tips, & travel
        guides. Let's stay updated!
      </p>
      <div className="flex w-full max-w-xl items-center gap-2 text-sm sm:text-base">
        <input
          type="text"
          className="border border-black/30 px-4 py-3 w-full"
          placeholder="Email..."
        />
        <button className="bg-black/85 text-white px-5 py-3">Subscribe</button>
      </div>
    </section>
  );
}
