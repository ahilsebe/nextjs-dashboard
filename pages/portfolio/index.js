

import { useState } from 'react';

const MyComponent = () => {
  const [revealedLines, setRevealedLines] = useState(0);

  const lines = [
    "In the realm where time's whispers glide,",
    'A girl believes she turns thirty without pride.',
    'But at twenty-nine, her beauty shines bright,',
    'As I await, to marry her, with pure delight.',
    ' - ',
    'Her age mistaken, yet love remains true,',
    'With every heartbeat, my devotion grew.',
    'For when she turns twenty-nine this day,',
    "I'll hold her close, forever, come what may.",
    ' - ',
    'Her grace and charm, a treasure to behold,',
    "Our love's story, beautifully unfolds.",
    "Together we'll walk, a grand plan,",
    'Embracing the future, as our dreams expand.',
    ' - ',
    'So, happy twenty-ninth, my love so dear,',
    "The day you're not thirty, let's make it clear.",
    'With each passing year, my heart will soar,',
    'As we walk together, forevermore.',
    ' - ',
    ' Love, ',
    ' Andrew ',
  ];

  const handleClick = () => {
    setRevealedLines((prevLines) => prevLines + 1);
  };

  return (
    // <div>
      
    //   <h1>Happy 29th Birthday, Content!</h1>
    //   <p>With each correct Jeopardy answer you unlock a new line of your poem.</p>
      
    // </div>


<div className="flex justify-center items-center h-screen">
      <div className="">
      {/* <img src="https://media.istockphoto.com/id/1329463476/vector/beach-wedding-bride-and-groom-newlywed-couple.jpg?s=612x612&w=0&k=20&c=PX78-QO1WHUP3mR7nODTWCaLt-cYqfF4hvZErdrc0Yk=" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />              */}
        <h1 className="text-4xl font-bold text-center mb-4">Happy 29th Birthday, Content!</h1>
        <h2 className="text-lg text-center mb-4 italic">With each correct Jeopardy answer you unlock a new line of your poem.</h2>

        <div>
          <div class="flex justify-center">
          <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-blue-500 rounded-lg m-8" href="https://jeopardylabs.com/play/coco-loco-jeopardy-masters" target="_blank" rel="noopener noreferrer">
        Let's Play!
      </a>
      <button class="bg-white-500 text-blue-500 font-bold py-2 px-4 rounded border-2 border-blue-500 rounded-lg m-8" onClick={handleClick}>Reveal Line</button>
         </div>
      
        <div className="border border-brown-700 p-4 bg-brown-200">
        <ul className="flex-col justify-center">
        {lines.slice(0, revealedLines).map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      </div>
        

      </div>
    </div>
    </div>
    
  );
};

export default MyComponent;


// import { Fragment } from "react";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// function portfolio() {

//   return (
//     <Fragment>
   
//    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
//           <div class="container flex flex-wrap items-center justify-between mx-auto">
//             <a href="https://andrewhilseberg.com/" class="flex items-center">
//               <img
//                 src="/diving.png"
//                 class="h-6 mr-3 sm:h-9"
//                 alt="Flowbite Logo"
//               />
//               <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//                 Springboard Finance
//               </span>
//             </a>
//             <button
//               data-collapse-toggle="navbar-default"
//               type="button"
//               class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-default"
//               aria-expanded="false"
//             >
//               <span class="sr-only">Open main menu</span>
//               <svg
//                 class="w-6 h-6"
//                 aria-hidden="true"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//             <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//               <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                   <a
//                     href="#"
//                     class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
//                     aria-current="page"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/portfolio"
//                     class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     Portfolio
//                   </a>
//                 </li>
               
//                 <li>
//                   <a
//                     href="#"
//                     class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
   

// <div class="flex">
//   <div class="text-xl">Portfolio</div>
//   <div class="flex flex-col">
//         <a href="/portfolio/nearestOpps" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nearest Opportunities</h5>
//         <p class="font-normal text-gray-700 dark:text-gray-400">Blend analytics with your schedule to find optimal client visits.</p>
//         </a>

//         <a href="/portfolio/cryptopage" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crypto Dashboard</h5>
//         <p class="font-normal text-gray-700 dark:text-gray-400">Check in on your portfolio's latest developments.</p>
//         </a>
//         </div>
// </div>
  
//     </Fragment>
//   );
// }

// export default portfolio;
