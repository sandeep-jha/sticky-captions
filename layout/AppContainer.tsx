import React, { PropsWithChildren, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const AppContainer = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const mainContentRef = useRef<any>(null);
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [router.asPath]);
  return (
    <div
      className="overflow-y-auto w-screen px-10 pb-10 flex flex-col items-center lg:items-start lg:flex-row justify-between"
      ref={mainContentRef}
    >
      {children}
    </div>
  );
};

export default AppContainer;
