import Cards from "./Cards/Cards";
// import Nft from "./Cards/Nft";
import "./Cards/style.css";
// eslint-disable-next-line arrow-body-style
const Body2 = () => {
  return (
    <>
      <div className="my-2 py-1 font-mono text-bold text-lg gradient-bg-footer text-white">
        <ul className="w-1/2 flex justify-between">
          <li className="hover:bg-gray-400 hover:px-2 hover:rounded-md">All</li>
          <li className="hover:bg-gray-400 hover:px-2 hover:rounded-md">Art</li>
          <li className="hover:bg-gray-400 hover:px-2 hover:rounded-md">Gaming</li>
          <li className="hover:bg-gray-400 hover:px-2 hover:rounded-md">Memberships</li>
          <li className="hover:bg-gray-400 hover:px-2 hover:rounded-md">PFPs</li>
          <li className="hover:bg-gray-400 hover:px-2 hover:rounded-md">Photography</li>
          <li className="hover:bg-gray-400 hover:px-2 hover:rounded-md">Music</li>
        </ul>
      </div>
      <h1 className="mx-3 text-3xl">Notable Collections</h1>
      <Cards />
      <h1 className="mx-3 text-3xl">Top Collector Buys Today</h1>
      <Cards />
      <h1 className="mx-3 text-3xl">Spotlighted on Updated Collection Pages</h1>
      <Cards />
      <h1 className="mx-3 text-3xl">Trending in Gaming</h1>
      <Cards />
      <h1 className="mx-3 text-3xl">Trending in Art</h1>
      <Cards />
      <h1 className="mx-3 text-3xl">Music</h1>
      <Cards />
      <h1 className="mx-3 text-3xl">Photography</h1>
      <Cards />
      {/* <Nft /> */}
    </>
  );
};

export default Body2;
