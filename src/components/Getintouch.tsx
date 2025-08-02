import { Send } from "lucide-react";
import { Link } from "react-router"; // Use "react-router-dom" instead of "react-router"

export default function Getintouch() {
  return (
    <section className="w-full relative h-[450px] mb-10">
      {/* Background Image */}
      <div className="absolute w-full h-full bg-[url('/src/assets/nature2.jpg')] bg-no-repeat bg-cover bg-top-left brightness-40" />

      {/* Overlay Text */}
      <div className="absolute left-1/2 top-1/2 transform w-full -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
        <h3 className="text-3xl font-semibold mb-2">GET IN TOUCH</h3>
        <p className="mb-1">
          Feel free to{" "}
          <Link to="/contact" className="underline text-secondary">
            contact me
          </Link>{" "}
          if you have travel questions, comments, or suggestions.
        </p>
        <p className="mb-4">I'll try to get back to you!</p>
        <Send className="size-10 mx-auto" />
      </div>
    </section>
  );
}
