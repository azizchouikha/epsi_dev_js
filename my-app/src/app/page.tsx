// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import cookieImage from "@/public/images/cookie.png";

// export default function Home() {
//   const [clickCount, setClickCount] = useState(0);

//   const handleClick = () => {
//     setClickCount(clickCount + 1);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Section bleue */}
//       <div className="flex-1 bg-blue-500 relative flex flex-col items-center justify-center">
//         <Image
//           src={cookieImage}
//           alt="Cookie"
//           className="spin-slow"
//           width={150}
//           height={150}
//           onClick={handleClick} // Ajout de l'événement de clic
//         />
//         {/* Affichage du compteur */}
//         <div className="text-white text-xl mt-4">
//           Nombre de clics sur le cookie : {clickCount}
//         </div>
//       </div>
//       {/* Section rouge */}
//       <div className="flex-1 bg-red-500"></div>
//       {/* Section jaune */}
//       <div className="flex-1 bg-yellow-500"></div>
//     </div>
//   );
// }

"use client";

import ClickableCookie from "@/components/ClickableCookie";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Section bleue */}
      <div className="flex-1 bg-blue-500 flex items-center justify-center">
        <ClickableCookie />
      </div>
      {/* Section rouge */}
      <div className="flex-1 bg-red-500 flex items-center justify-center">
      </div>
      {/* Section jaune */}
      <div className="flex-1 bg-yellow-500 flex items-center justify-center">
      </div>
    </div>
  );
}
