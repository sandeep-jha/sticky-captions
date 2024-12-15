import React, { PropsWithChildren, ReactNode } from "react";
import pin from "../assets/logo/pin.png";
import Image from "next/image";

type Props = {
  children: ReactNode;
  classname?: string;
};
const CardWrapper = (props: Props) => {
  return (
    <div
      className={
        "h-fit bg-white sketch_border relative" + " " + props?.classname
      }
    >
      <Image
        width={50}
        src={pin}
        alt="pin"
        className="absolute top-[-10] left-1 rotate-45 z-10"
      />
      {props?.children}
    </div>
  );
};

export default CardWrapper;
