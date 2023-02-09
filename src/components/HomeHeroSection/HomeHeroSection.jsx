import { Link } from "react-router-dom";

export default function HomeHeroSection() {
  return (
    <section>
      <div className="relative">
        <div
          className="h-[32rem] bg-no-repeat bg-cover bg-center bg-fixed bg-[url('./images/gnews-hero-image.jpg')] opacity-40 brightness-75"
          data-testid="homehero-section-testing"
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-1/2 lg:w-3/5">
          <h1 className="font-bold text-5xl text-white drop-shadow-2xl">
            Simple <span className="text-blue-400">News API</span> to search
            News and Blog Articles
          </h1>

          <Link
            to="/searchpage"
            className="inline-block mt-20 px-8 py-4 bg-blue-300 text-white font-medium hover:bg-blue-800"
          >
            SEARCH NOW
          </Link>
        </div>
      </div>

      <div className="w-full h-16 bg-blue-300 flex justify-center items-center">
        <p className="font-mono text-white font-bold text-sm md:text-lg lg:text-xl">
          Search The Most Updated News From Our Website
        </p>
      </div>
    </section>
  );
}
