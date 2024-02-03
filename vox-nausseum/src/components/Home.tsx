import Card from "./Card";
import Delimiter from "./Delimiter";
import PreviousEvents from "./PreviousEvents";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-evenly items-center">
      <span className="text-2xl font-SpaceMono-regular mt-0 lg:mt-1 2xl:mt-3 w-[75vw] text-center">
        Check out our newest release,
        <span className="font-SpaceMono-bold">CRYSTAL</span>
        <span className="font-Inter-li">!</span>
      </span>
      <div className="flex flex-row mt-[-1.25rem] w-screen">
        <div className="sm:flex flex-col flex-1 hidden justify-evenly items-center overflow-hidden">
          <span className="font-Inter-md text-lg lg:text-xl">
            Upcoming events
          </span>
          <UpcomingEvents />
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
