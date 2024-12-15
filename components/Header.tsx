import Image from "next/image";
import React from "react";
import logo from "../public/stickyCaptionsLogo.png";
import github from "../assets/logo/github.png";
import docs from "../assets/logo/docs.png";
import reset from "../assets/logo/back.png";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { resetCaptions } from "@/store/captionsSlice";
import { resetCurrentVideo } from "@/store/videoSlice";

type Props = {};

const Header = (props: Props) => {
  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(resetCurrentVideo());
    dispatch(resetCaptions());
  };

  return (
    <header className="my-5 px-6 sm:px-14 md:px-32 flex justify-between items-center w-screen">
      <Image src={logo} alt="Sticky Captions" width={150} height={150} />
      <div className="flex items-center">
        <Link
          href={"https://github.com/sandeep-jha/sticky-captions"}
          className="cursor-pointer mr-10"
        >
          <Image src={github} alt="github" width={35} height={35} />
        </Link>
        <Link
          href={
            "https://drive.google.com/file/d/1VWxRDk21n1_1RTpAArwWbEWRRk0daLJy/view?usp=drive_link"
          }
          className="cursor-pointer mr-10"
        >
          <Image src={docs} alt="document" width={35} height={35} />
        </Link>

        <Image
          className="cursor-pointer"
          src={reset}
          alt="reset"
          onClick={resetHandler}
          width={40}
          height={40}
        />
      </div>
    </header>
  );
};

export default Header;
