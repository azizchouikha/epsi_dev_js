"use client";

import { useState } from "react";
import Image from "next/image";
import cookieImage from "@/public/images/cookie.png";

export default function ClickableCookie() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image
        src={cookieImage}
        alt="Cookie"
        className="spin-slow"
        width={150}
        height={150}
        onClick={handleClick}
      />
      <div className="text-white text-xl mt-4">
        Nombre de clics sur le cookie : {clickCount}
      </div>
    </div>
  );
}
