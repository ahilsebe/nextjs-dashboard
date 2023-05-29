import { Fragment } from "react";
import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { createPopper } from '@popperjs/core';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import GoogleMapReact from 'google-map-react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

//addresses
import { addresses } from "./data";


//google maps api key
//AIzaSyCSM4ZLyGY9Wh1ZXaQ_cdUz3FnbQq43zz4. AIzaSyASFFo5HNA8D3Ua8p_FzRY4ueOZmhM7n5I

function nearestOpps() {

 //onclick test

//  const {} = useLoadScript({ googleMapsApiKey: "AIzaSyASFFo5HNA8D3Ua8p_FzRY4ueOZmhM7n5I"});






  // //usestate input box
  // const [searchAddress, setSearchAddress] = useState('');

  // const handleChange = event => {
  //   setSearchAddress(event.target.value);
  //   console.log(event.target.value);
  // };




  // const [data, setData] = useState([]);
  
  // //sort and filter to top 5, need to use set state?
 

  // const fetchData = () => {
  //       setData(addresses);
  // };

  // useEffect(() => {
  //   fetchData();
      
  // }, []);



  //googlemaps test
  



 

  return (
    <Fragment>

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://andrewhilseberg.com/" class="flex items-center">
              <img
                src="/diving.png"
                class="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Springboard Finance
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
<div class="flex justify-center items-center"> 
<div class="flex-col justify-center">
<div class="m-8 text-4xl font-bold">Opportunity Finder</div>
<div class="m-8 italic text-slate-500 text-sm">Enter an address below to find the best, closest opportunities.</div>
<div class="m-8 flex flex-row">
{/* <input class="my-0 ml-0 mr-4  border-2 w-5/6 bg-white rounded-2xl pl-2 py-0.5"
        type="number"
        id="message"
        name="message"
        onChange={handleChange}
        value={searchAddress}
      /> */}
    {/* <button onClick={gMapsTest} class="my-0 ml-4 mr-0 w-1/6 \ text-center bg-green-500 text-white rounded-2xl">Go</button> */}
</div>
<div class="m-8 text-xl font-semibold">Your Top Opportunities</div>

{/* begin table section
<div class="bg-white border-2 p-8 rounded-lg">
<div class="flex flex-col justify-center">
    <div>
      <table class="table-auto text-sm">
      <thead>
        <tr>
          <th>Address</th>
          <th>Score</th>
          <th>Delta</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.address}</td>
            <td>{item.score}</td>
            <td>{item.delta}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
    </div>
    </div> */}
    </div>
    </div>


    </Fragment>
  );
}

export default nearestOpps;
