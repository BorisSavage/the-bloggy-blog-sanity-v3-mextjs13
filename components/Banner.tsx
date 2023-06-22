export default function Banner() {
  return (
    <div className="flex flex-col justify-center space-y-3.5 px-10 md:space-y-7">
      <div className="flex flex-col justify-between space-y-1.5 font-bold md:space-y-5 lg:flex-row lg:space-x-5">
        <div>
          <h1 className="text-4xl sm:text-7xl">The Fragrance Aficionado</h1>
          <h2 className="relative mt-1.5 text-sm sm:text-base md:mt-5">
            <span
              style={{ textShadow: "0 0 2px rgba(0,0,0,0.05)" }}
              className="absolute left-0 top-0 text-transparent"
            >
              The most sophisticated
            </span>
            <span className="relative bg-gradient-to-br from-lime-700 via-teal-700 to-violet-700 bg-clip-text text-transparent">
              The most sophisticated
            </span>{" "}
            insights into the world of fragrance
          </h2>
        </div>

        <p className="max-w-sm text-sm text-cyan-900/50 sm:text-base">
          Hot takes | Top picks | Industry insights
        </p>
      </div>
      <hr className="border-teal-700" />
    </div>
  );
}
