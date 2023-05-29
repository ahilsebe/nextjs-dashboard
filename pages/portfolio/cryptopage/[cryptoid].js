import { useRouter } from "next/router";
import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';

function CryptoIDPage() {
  const router = useRouter();
  const cryptoName = router.query.cryptoid;
  const [cryptoPrice, setCryptoPrice] = useState();
  const priceUrl = "https://min-api.cryptocompare.com/data/price?fsym=" + cryptoName + "&tsyms=USD&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}";
  const newsApiUrl = "https://min-api.cryptocompare.com/data/v2/news/?categories=" + cryptoName + "&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}"
  const priceTrendUrl = "https://min-api.cryptocompare.com/data/v2/histohour?fsym="+ cryptoName +"&tsym=USD&limit=48&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}";


  //-----------------Price API Call----------------------------------\\
  axios
    .get(
      priceUrl
    )
    .then((res) => {
      const dataObj = Math.round(res.data.USD * 100) / 100;
    console.log(dataObj);
    setCryptoPrice(dataObj);

    })
    .catch((err) => {
      console.log(err);
    });


//---------------News API Call-------------------------------------\\



const [news, setNews] = useState(null);
const baseUrl =
React.useEffect(() => {
  axios.get(newsApiUrl).then((response) => {
    setNews(response.data.Data);
  }
  );
}, []);

if (!news) return null;

console.log(news);


//------------All calls in 1-------------------------

// const [resp, setCryptoData] = useState({ news: null, trend: null });

// useEffect(() => {
//   const fetchData = async () => {
//     const respNews = await axios(
//       newsApiUrl
//     );
//     const respTrend = await axios(
//       priceTrendUrl
//     );

//     setCryptoData({ news: respNews.data, trend: respTrend.data });
//   };

//   fetchData();
// }, []);

// console.log('render');
// if (resp.news) {
//   console.log("response", resp.news, resp.trend);
//   console.log(resp.trend);
// }

//----------Chart Test------

// const data = {
//     labels: ['a','b','c','a','b','c','a','b','c'],
//     datasets: [
//       {
//         label: cryptoName + " Price",
//         fill: false,
//         lineTension: 0.4,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [0,3,2,3,12,8,6,3,8]
//       }
//     ]
//   };

  return (
  
  <Fragment>
      <nav class="bg-white border-gray-200 sm:py-2.5 dark:bg-gray-900">
          <div class="container flex flex-wrap items-center justify-between mx-8">
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

        <nav class="flex dark:text-white bg-gray-900" aria-label="Breadcrumb">
  <ol class="inline-flex items-center ml-8 space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <a href="/portfolio" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Portfolio</a>
      </div>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <a href="/portfolio/cryptopage" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Crpyto Page</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <span class="ml-1 text-sm font-medium text-blue-700 md:ml-2 dark:text-blue-700">{cryptoName}</span>
      </div>
    </li>
  </ol>
</nav>




        <div class="bg-gray-100 dark:bg-gray-900">
        <div class="flex flex-col h-fit">
         
          <div class="flex items-center justify-between rounded-2xl mx-8 my-8 w-auto font-bold text-4xl dark:text-white">
          <h1 class="m-0 p-0">{cryptoName} Dashboard</h1>
    
          </div>
          <div class="flex flex-row">
          {/* left section */}
            <div class="flex flex-col w-3/4">
            {/* horizontal section 1 */}
            <div class="flex flex-row h-64 h-min mt-8">
            <div class="flex flex-col rounded-2xl ml-8 mr-4 w-2/5 dark:text-white bg-gray-800">
              <div class="flex flex-col m-4  font-bold">
                { cryptoName } Price
                </div>
                <div class="flex flex-col m-4 h-32 place-items-center text-4xl font-bold">
                { cryptoPrice } USD
                </div>
              </div>
              <div class="flex rounded-2xl ml-4 mr-8 w-3/5 p-4 dark:text-white bg-gray-800">
              <h1>Commentary</h1>
              </div>
            </div>

            {/* horizontal section 2 */}
            <div class="flex flex-row h-64 mt-8">
            <div class="flex rounded-2xl ml-8 mr-4 w-3/5 p-4 dark:text-white bg-gray-800">
          
                          <div>
                          <h1>Price Trend</h1>
                {/* <Line
                  data={data}
                  // width={400}
                  // height={240}
                /> */}
              </div>
              </div>
              <div class="flex rounded-2xl ml-4 mr-8 w-2/5 p-4 dark:text-white bg-gray-800">
              <h1>News</h1>
              </div>
            </div>

            {/* horizontal section 3 */}
            <div class="flex flex-row h-96 mt-8">
            <div class="flex rounded-2xl ml-8 mr-8 mb-8 w-full p-4 dark:text-white bg-gray-800">
              <h1>Table</h1>
              </div>
            </div>
          </div>
          <div class="flex flex-col rounded-2xl w-1/4 mr-8 my-8 dark:bg-gray-800">
          <div class="flex flex-col m-4 font-bold dark:text-white">
          News
                <div>
                    <div class="m-4"></div>
                
                <div class="flex flex-col -m-2">
      <div class="xl: md: p-4">
      <a href={news[0].guid} target='_blank'><span>
        <div class="bg-gray-900 p-6 rounded-lg h-1/3">
          <img class="lg:h-60 xl:h-16 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={news[0].imageurl} alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{news[0].source_info.name}</h3>
          <h2 class="text-md text-gray-200 font-lg title-font mb-4">{news[0].title}</h2>
    
        </div>
        </span></a>
      </div>

      <div class="xl: md: p-4">
      <a href={news[1].guid} target='_blank'><span>
        <div class="bg-gray-900 p-6 rounded-lg h-1/3">
          <img class="lg:h-60 xl:h-16 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={news[1].imageurl} alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{news[1].source_info.name}</h3>
          <h2 class="text-md text-gray-200 font-lg title-font mb-4">{news[1].title}</h2>
      
        </div>
        </span></a>
      </div>
      <div class="xl: md: p-4">
      <a href={news[2].guid} target='_blank'><span>
        <div class="bg-gray-900 p-6 rounded-lg h-1/3">
          <img class="lg:h-60 xl:h-16 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={news[2].imageurl} alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{news[2].source_info.name}</h3>
          <h2 class="text-md text-gray-200 font-lg title-font mb-4">{news[2].title}</h2>
        
        </div>
        </span></a>
      </div>

    
     
      </div>

                </div>
          </div>
          </div>
          </div>


        </div>
       </div>


  </Fragment>
  );
}

export default CryptoIDPage;
