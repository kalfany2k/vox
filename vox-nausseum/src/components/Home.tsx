import Card from "./Card";
import Delimiter from "./Delimiter";
import PreviousEvents from "./PreviousEvents";
import UpcomingEvent from "./UpcomingEvent";

const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <span className="text-xl md:text-2xl font-SpaceMono-regular mt-8 md:mt-10 2xl:mt-[3.25rem] w-[75vw] text-center">
        Check out our newest release,
        <span className="font-SpaceMono-bold">CRYSTAL</span>
        <span className="font-Inter-li">!</span>
      </span>
      <div className="flex flex-row mt-2 mb-4 md:mt-4 md:mb-8 w-screen">
        <div className="sm:flex flex-col flex-1 hidden justify-evenly items-center">
          <span className="font-Inter-md text-lg lg:text-xl">
            Upcoming event
          </span>
          <UpcomingEvent />
        </div>
        <div className="flex flex-1 card-container text-shadow-lg transition-all ease-in-out duration-300 justify-center items-center">
          <Card />
        </div>
        <div className="font-Inter-md text-xl xl:flex flex-col flex-1 hidden justify-evenly items-center">
          <span>Previous events</span>
          <PreviousEvents />
        </div>
      </div>
      <Delimiter />
    </div>
  );
};

export default Home;
