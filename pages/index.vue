<template>
  <div class="container mx-auto my-5">
    <div
      class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72"
    >
      <div
        class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg"
      >
        <div
          class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
          style="background-image: url( https://pbs.twimg.com/profile_images/1266448782935224320/t4plm6AG_400x400.jpg ); background-blend-mode: multiply;"
        ></div>
        <div
          class="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900"
        >
          <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">
            Life is too short. Let's do this.
          </h3>
          <h4 class="w-full text-xl text-gray-100 leading-tight">
            ポートフォリオっぽい何か
          </h4>
        </div>
        <svg
          class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>

      <div
        class="z-10 order-2 md:order-1  md:w-3/5 flex items-center -mt-6 md:mt-0"
      >
        <div class="" style="margin-left:20px">
          <h4 class="hidden md:block text-xl text-gray-400">
            ポートフォリオっぽい何か
          </h4>
          <h3 class="hidden md:block font-bold text-2xl text-gray-700">
            Life is short. Let's do this.
          </h3>
        </div>
      </div>
    </div>
    <div>
      <style>
        .pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23a0aec0' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
        }

        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #cbd5e0;
        }
        ::-webkit-scrollbar-thumb {
          background: #2d3748;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #718096;
        }
      </style>

      <main class="font-sans bg-white" style="margin-top:30px">
        <div>
          <header class="bg-white shadow border-t-4 ">
            <div class="container mx-auto px-6 py-4">
              <div class="flex items-center justify-between">
                <div>
                  <a
                    class="flex items-center text-gray-800 hover:text-indigo-600"
                    href="#"
                  >
                    <svg
                      class="h-6 w-6 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="mx-3 font-medium text-sm md:text-base"
                      >Kohei Otani</span
                    >
                  </a>
                </div>
                <div class="flex items-center -mx-2">
                  <a
                    class="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
                    href="https://www.linkedin.com/in/kohei-otani-27883121/"
                  >
                    <img
                      class="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                      viewBox="0 0 512 512"
                      src="https://img.icons8.com/ios/50/000000/linkedin.png"
                    />
                  </a>

                  <a
                    class="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
                    href="https://twitter.com/godzhigella"
                  >
                    <svg
                      class="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                      />
                    </svg>
                  </a>

                  <a
                    class="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
                    href="https://github.com/higedamc"
                  >
                    <svg
                      class="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </header>

          <section class="bg-white mt-20">
            <div class="max-w-2xl px-6 text-center mx-auto">
              <h2 class="text-3xl font-semibold text-gray-800">
                Hi,
                <span class="bg-indigo-600 text-white rounded px-1"
                  >I’m Kohei</span
                >
                . Nice to meet you.
              </h2>
             
            </div>
          </section>

          <section class="bg-gray-800 pattern py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
              <h2 class="text-2xl font-semibold text-white">About Me</h2>
              <p class="text-gray-400 mt-4">
                起業家 / 通・翻訳・発音矯正家 / Cypherpunk/ 元CoinTelegraph
                Japan Editing & Publishing Lead / BTC & WireGuard狂 /
                元シーシャ屋経営者
              </p>
            </div>
          </section>

          <section class="bg-white py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
              <h2 class="text-2xl font-semibold text-gray-800">Latest Posts</h2>

              <div class="flex flex-col items-center justify-center mt-6">
                <a
                  class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <h3 class="text-lg font-medium text-gray-700">
                      Easy, Free Laravel CI Using GitHub Actions
                    </h3>
                    <span class="block text-gray-600 font-light text-sm"
                      >20 Jan 2020</span
                    >
                  </div>
                </a>

                <a
                  class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <h3 class="text-lg font-medium text-gray-700">
                      Pest: a delightful PHP Testing Framework
                    </h3>
                    <span class="block text-gray-600 font-light text-sm"
                      >29 Oct 2019</span
                    >
                  </div>
                </a>

                <a
                  class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <h3 class="text-lg font-medium text-gray-700">
                      Using inline SVGs in Vue components
                    </h3>
                    <span class="block text-gray-600 font-light text-sm"
                      >15 Oct 2019</span
                    >
                  </div>
                </a>

                <a
                  class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  href="#"
                >
                  <div class="flex items-center justify-between px-4 py-2">
                    <h3 class="text-lg font-medium text-gray-700">
                      Acceptance Testing Laravel & VueJs Apps with Codeception
                    </h3>
                    <span class="block text-gray-600 font-light text-sm"
                      >3 Oct 2019</span
                    >
                  </div>
                </a>
              </div>

              <div class="flex items-center justify-center mt-12">
                <a
                  class="flex items-center text-gray-600 hover:underline hover:text-gray-500"
                  href="#"
                >
                  <span>View More</span>

                  <svg
                    class="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <section class="bg-gray-800 pattern py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
              <h2 class="text-2xl font-semibold text-white">Projects</h2>

              <div class="flex items-center justify-center mt-10">
                <div
                  class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <div class="max-w-xs w-full">
                    <div
                      class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden"
                    >
                      <img
                        class="aligncenter h-60 w-50"
                        src="https://github.com/higedamc/kiatsu/blob/master/screenshots/IMG_2924.jpg?raw=true"
                        alt=""
                      />
                    </div>

                    <a
                      href="https://github.com/higedamc/kiatsu/"
                      class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      <div class="py-2 px-3 text-center text-sm">
                        <p class="text-gray-300">
                          低気圧測定アプリ
                        </p>

                        <span class="block text-gray-500 mt-2"
                          >https://github.com/higedamc/kiatsu/</span
                        >
                      </div>
                    </a>
                  </div>

                  <div class="max-w-xs w-full">
                    <div
                      class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden"
                    >
                      <img
                        class="object-cover h-8"
                        src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                        alt=""
                      />
                    </div>

                    <a
                      href="#"
                      class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      <div class="py-2 px-3 text-center text-sm">
                        <p class="text-gray-300">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>

                        <span class="block text-gray-500 mt-2"
                          >tailwindcomponents.com</span
                        >
                      </div>
                    </a>
                  </div>

                  <div class="max-w-xs w-full">
                    <div
                      class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden"
                    >
                      <img
                        class="object-cover h-8"
                        src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                        alt=""
                      />
                    </div>

                    <a
                      href="#"
                      class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      <div class="py-2 px-3 text-center text-sm">
                        <p class="text-gray-300">
                          LLLorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>

                        <span class="block text-gray-500 mt-2"
                          >tailwindcomponents.com</span
                        >
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-center mt-12">
                <a
                  class="flex items-center text-white hover:underline hover:text-gray-200"
                  href="https://github.com/higedamc?tab=repositories"
                >
                  <span>View More On Github</span>

                  <svg
                    class="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <footer class="bg-white">
            <div class="container mx-auto px-6 py-4">
              <div class="flex justify-between items-center">
                <div>
                  <div class="text-gray-600">&copy; Kohei Otani</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {}
};
</script>

<style></style>
