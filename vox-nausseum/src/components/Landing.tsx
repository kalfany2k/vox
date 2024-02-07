import { ReactNode } from "react";
import Header from "../components/Header";
import GradientBackground from "./GradientBackground";
import { isFirefox } from "react-device-detect";

interface Props {
  currentPage: ReactNode;
}

function Landing({ currentPage }: Props) {
  return (
    <div
      className="flex flex-col w-screen h-[200vh] md:h-screen overflow-y-scroll overflow-x-hidden"
      style={{ color: isFirefox ? "black" : "white" }}
    >
      <div className="w-screen h-24">
        <Header />
      </div>
      {/* Divider bar */}
      <div
        className="h-1 absolute top-[6rem] w-full self-center bg-white/80 rounded-md drop-shadow-xl"
        style={{ backgroundColor: isFirefox ? "black" : "" }}
      ></div>
      {currentPage}
      {!isFirefox && <GradientBackground />}
    </div>
  );
}

export default Landing;
