export default function Banner() {
  return (
    <section className="relative min-h-screen min-w-screen ">
      <div className="absolute bg-[url(/travel1.jpg)] bg-cover bg-center brightness-50 h-full w-full"></div>
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 text-white text-center w-3/4 sm:w-1/2 lg:w-1/3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-shadow-xs">
          Explore. Dream. <br /> Discover
        </h1>
        <p className="text-lg lg:text-xl text-shadow-2xs font-semibold leading-relaxed">
          This is a travel blog about beautiful hidden destinations around the
          world.
        </p>
      </div>
    </section>
  );
}
