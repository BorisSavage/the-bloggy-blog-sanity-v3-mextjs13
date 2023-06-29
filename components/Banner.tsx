import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex flex-col justify-center space-y-3.5 px-10 sm:space-y-7">
      <div className="flex flex-col justify-between space-y-1.5 font-bold sm:space-y-5 lg:flex-row lg:items-end lg:space-x-5">
        <div>
          <Link href="/">
            <h1 className="relative text-4xl tracking-widest sm:text-7xl">
              <span className="absolute -left-[2px] right-[2px] text-teal-700 blur-[1px]">
                The Fragrance Aficionado
              </span>
              <span className="relative">The Fragrance Aficionado</span>
            </h1>
          </Link>
          <h2 className="relative mt-1.5 text-sm sm:mt-5 sm:text-base">
            <span
              style={{ textShadow: "0 0 2px rgba(0,0,0,0.05)" }}
              className="absolute left-0 top-0 font-extrabold tracking-wide text-transparent"
            >
              The most sophisticated
            </span>
            <span className="relative bg-gradient-to-br from-lime-700 via-teal-700 to-violet-700 bg-clip-text font-extrabold tracking-wide text-transparent">
              The most sophisticated
            </span>{" "}
            <span>insights into the world of fragrance</span>
          </h2>
        </div>

        <p className="max-w-sm flex-shrink-0 flex-grow text-sm text-teal-900/80 sm:text-base">
          Hot takes | Top picks | Industry&nbsp;insights
        </p>
      </div>
      <hr className="border-teal-700" />
    </div>
  );
}
