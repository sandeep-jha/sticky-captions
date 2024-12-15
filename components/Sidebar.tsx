import { useAppSelector } from "@/store/hooks";
import React from "react";
import AddCation from "@/components/AddCation";
import AddVideo from "./AddVideo";

type Props = {};

const Sidebar = (props: Props) => {
  const { videoUrl } = useAppSelector((state) => state.currentVideo.video);
  return <div className="w-fit">{videoUrl ? <AddCation /> : <AddVideo />}</div>;
};

export default Sidebar;
