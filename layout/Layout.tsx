import React, { PropsWithChildren } from "react";
import AppContainer from "./AppContainer";
import Header from "@/components/Header";
import { Sour_Gummy } from "next/font/google";

const cabin_sketch = Sour_Gummy({
  subsets: ["latin"],
  weight: [
    "100",
    "400",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-cabin-sketch",
});

type Props = {};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`relative h-screen w-screen bg-transparent overflow-hidden ${cabin_sketch.variable} cabin_sketch`}
    >
      <div className="absolute z-[-1] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
        <Header />
        <AppContainer>{children}</AppContainer>
      </div>
    </div>
  );
};

export default Layout;
