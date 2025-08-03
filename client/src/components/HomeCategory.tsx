import { Link } from "react-router";

interface Category {
  img: string;
  text: string;
  link: string;
}

function Part({ img, text, link }: Category) {
  return (
    <Link
      to={link}
      className="flex flex-col gap-6 sm:gap-4 lg:gap-6 items-center"
    >
      <img src={img} alt="" className="rounded-md" />
      <h3 className="text-3xl sm:text-xl mg:text-2xl lg:text-3xl">{text}</h3>
    </Link>
  );
}

export default function HomeCategory() {
  return (
    <section className="custom-width mx-auto grid sm:grid-cols-3 gap-3 lg:gap-5 my-16 p-3">
      <Part link="/blogs" img="/src/assets/extra1.jpg" text="TRAVEL BLOG" />
      <Part
        link="/destinations"
        img="/src/assets/extra2.jpg"
        text="DESTINATION"
      />
      <Part link="/about" img="/src/assets/extra3.jpg" text="ABOUT" />
    </section>
  );
}
