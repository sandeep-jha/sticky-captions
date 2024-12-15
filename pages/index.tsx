import React from "react";
import Reactplayer from "../components/Reactplayer";
import Captions from "@/components/Captions";
import Sidebar from "@/components/Sidebar";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Sidebar />
      <div className="h-full flex flex-col items-center xl:items-start xl:justify-evenly xl:flex-row">
        <Reactplayer />
        <Captions />
      </div>
    </>
  );
};

export default index;

//https://youtu.be/mH1w9fQ-tiM?si=KVH9CDn73xtKpFeG
//https://vimeo.com/1024184564
