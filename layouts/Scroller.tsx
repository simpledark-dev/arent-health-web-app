import { Icons } from "@/public/icons";
import Image from "next/image";
import React from "react";

const Scroller = () => {
  const onScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={onScroll}>
      <Image
        className="fixed top-3/4 right-36"
        src={Icons.scroll}
        alt="scroll"
      />
    </button>
  );
};

export default Scroller;
