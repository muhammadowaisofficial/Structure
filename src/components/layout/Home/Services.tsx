import React from "react";

function Services() {
  return (
    <div className="servicesWrap relative pt-0 p-[50px] lg:px-[30px] md:px-[30px] sm:px-[30px] sx:px-[30px]">
      <div className="div_container">
        <div className="secTitleWrap mb-[2.1875rem]  text-center">
          <div className="secTitle">
            <h1 className="heading_h1 relative text-center font-bold text-black">
              <i className="absolute left-1/2 top-[-12%] z-[-1] ml-[-1.75rem] h-[3.5rem] w-[3.5rem] rounded-[10px] bg-[#eeeffa] text-black dark:bg-[#000] dark:text-white md:top-[-15%] md:ml-[-2.8125rem] md:h-[5.625rem] md:w-[5.625rem] md:rounded-[1.25rem]"></i>
              The Best{" "}
              <span className="fontCaveat relative text-[1.875rem] font-bold text-[#f6371c] md:text-[3.125rem]">
                Services
              </span>
            </h1>
            <p className="text-black 2xl:w-[50%] xl:w-[50%] lg:w-[80%] w-[100%] m-auto pt-5 py-7 text-[18px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <div className="servicesBoxes relative w-full">
          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
            <div className="gridItem">
              <div className="serviceBox relative z-[1] flex min-h-[20rem] w-full flex-col flex-wrap justify-center gap-3 p-[1.875rem] md:min-h-[24.375rem] md:p-7 lg:p-10 xl:p-[3.125rem]">
                <div className="serviceBg absolute inset-0 z-[-1] rounded-[10px] bg-[#f6371c] bg-[url('/images/patternImg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply before:absolute before:inset-0 before:z-[1] before:rounded-[10px] before:bg-[#f6371c] before:opacity-70 sm:rounded-[1.25rem] before:sm:rounded-[1.25rem] md:rounded-[3.125rem] before:md:rounded-[3.125rem]"></div>
                <span className="mb-[.9375rem] inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 387 387"
                    className="h-[4.25rem] w-[4.25rem] fill-white"
                  >
                    <g>
                      <path d="M1.09,198.42c2.94-7,7.66-11.89,15.46-13.32c2.68-0.49,5.31-0.4,7.78,0.49c2.56,0.92,4.19,0.07,5.94-1.7 c17.5-17.53,35.02-35.02,52.63-52.44c2.04-2.02,2.22-3.61,0.96-6.18c-6-12.17-3.66-26.13,5.74-35.66c9.4-9.53,23.68-11.99,36-5.95 c2.6,1.27,4.18,1.01,6.18-1c17.45-17.57,35-35.04,52.52-52.55c1.22-1.22,2.46-2.28,2.09-4.46c-2.24-13.09,0.85-19.08,12.47-24.61 c3.51,0,7.02,0,10.53,0c0.33,0.18,0.65,0.37,0.99,0.53c10.28,4.62,14.87,13.99,11.62,23.72c-3.22,9.64-12.72,14.52-23.55,11.88 c-2.16-0.53-3.25,0.36-4.52,1.63c-6.98,6.99-13.99,13.96-21,20.92c-2.64,2.62-5.31,5.21-8.13,7.97c0.71,0.24,0.97,0.42,1.14,0.36 c1.42-0.48,2.84-0.99,4.24-1.51c39.08-14.44,78.46-15.26,118.09-2.49c17.28,5.57,33.28,13.77,47.98,24.41 c2.32,1.68,3.81,1.68,5.66-0.45c1.8-2.07,3.86-3.92,5.82-5.85c4.5-4.4,7.43-4.43,11.85-0.11c2.68,2.62,5.37,5.25,7.96,7.96 c6.14,6.4,12.93,12.17,18.54,19.09c0,1.75,0,3.5,0,5.25c-8.98,9.07-17.9,18.19-26.96,27.19c-3.74,3.71-7.04,3.7-10.81,0.03 c-8.42-8.22-16.77-16.51-25.06-24.86c-3.35-3.37-3.24-6.74,0.05-10.19c1.29-1.36,2.57-2.76,4.03-3.93c2.57-2.06,1.91-3.4-0.53-5.06 c-22.44-15.28-47.01-24.87-74.05-28.09c-38.49-4.59-74.15,3.49-107.17,23.58c-1.28,0.78-2.49,1.7-3.8,2.41 c-1.81,0.98-1.94,2.19-1.16,4.02c8.25,19.25-4.71,41.42-26.58,43.22c-4.85,0.4-9.54-0.4-13.93-2.29c-2.57-1.11-3.75-0.38-5.12,1.76 c-13.6,21.16-22.3,44.1-25.37,69.1c-5,40.74,4.05,78.17,26.54,112.45c0.75,1.15,1.6,2.24,2.34,3.4c1.12,1.74,2.24,1.63,3.59,0.21 c1.63-1.73,3.3-3.43,5.07-5.02c3.06-2.76,6.51-2.93,9.41-0.08c8.66,8.51,17.24,17.1,25.7,25.8c3.24,3.33,3.23,6.64-0.01,9.95 c-8.32,8.49-16.74,16.89-25.27,25.18c-3.6,3.5-6.94,3.36-10.55-0.19c-8.29-8.17-16.53-16.39-24.72-24.67 c-3.69-3.73-3.59-6.88,0.13-10.74c2.08-2.16,4.13-4.38,6.39-6.35c2.15-1.87,2.1-3.37,0.43-5.66 c-10.75-14.78-18.98-30.9-24.56-48.29c-12.78-39.89-11.66-79.46,3.1-118.65c0.43-1.14,0.83-2.28,1.28-3.51 c-1.48-0.25-1.91,0.85-2.54,1.47c-8.98,8.89-17.92,17.83-26.9,26.73c-1.38,1.37-2.32,2.55-1.72,4.84 c2.75,10.57-2.03,19.94-11.62,23.33c-9.72,3.44-19.32-1.04-23.97-11.18c-0.21-0.45-0.44-0.9-0.65-1.35 C1.09,205.43,1.09,201.93,1.09,198.42z M93.65,111.45c-0.06,10.33,7.82,18.4,18.06,18.48c10.22,0.08,18.46-7.99,18.51-18.13 c0.05-10.24-7.94-18.33-18.17-18.38C101.54,93.36,93.71,101.05,93.65,111.45z M370.44,111.13c-0.21-0.29-0.44-0.74-0.78-1.08 c-4.85-4.86-9.72-9.71-14.58-14.57c-1.52-1.52-2.43-0.22-3.39,0.73c-4.34,4.31-8.61,8.71-13.03,12.93 c-1.73,1.65-1.92,2.79-0.08,4.54c4.44,4.21,8.75,8.56,13,12.96c1.55,1.6,2.67,1.75,4.29,0.06c4.33-4.49,8.82-8.85,13.22-13.27 C369.69,112.83,370.47,112.3,370.44,111.13z M111.41,336.31c-0.33,0.25-0.87,0.56-1.3,0.99c-4.7,4.66-9.36,9.37-14.09,14 c-1.49,1.46-0.59,2.36,0.45,3.39c4.52,4.49,9.08,8.94,13.51,13.52c1.51,1.56,2.52,1.42,3.96-0.08c4.25-4.4,8.59-8.72,12.99-12.98 c1.55-1.5,1.9-2.65,0.18-4.31c-4.49-4.34-8.86-8.81-13.29-13.21C113.22,337.03,112.66,336.29,111.41,336.31z M209.96,19.53 c0.04-3.2-2.72-6.06-5.82-6.06c-3.1,0-5.83,2.87-5.82,6.1c0.02,2.98,2.69,5.73,5.67,5.84C207.17,25.52,209.92,22.81,209.96,19.53z  M19.37,197.91c-3.1,0.09-5.36,2.5-5.25,5.59c0.11,3.06,2.82,5.72,5.83,5.71c2.88-0.01,5.54-2.65,5.56-5.51 C25.52,200.59,22.59,197.82,19.37,197.91z"></path>
                      <path d="M386.09,288.48c-1.05,1.24-2.02,2.56-3.16,3.7c-29.94,29.91-59.89,59.8-89.85,89.69c-0.44,0.44-0.88,0.89-1.34,1.31 c-4.31,3.88-8.66,3.18-11.31-2.02c-5.84-11.49-11.63-23-17.29-34.57c-1.31-2.67-3.11-4.22-5.88-5.26 c-19.92-7.52-39.77-15.2-59.67-22.77c-2.9-1.1-4.75-2.98-5.9-5.85c-20.39-50.98-40.8-101.94-61.26-152.89 c-1.4-3.5-0.74-6.26,1.87-8.83c6.33-6.24,12.63-12.51,18.87-18.84c2.68-2.72,5.5-3.42,9.16-1.95 c50.93,20.38,101.88,40.7,152.84,60.99c3.15,1.26,5.05,3.32,6.25,6.48c7.61,19.98,15.36,39.91,22.97,59.9 c0.87,2.3,2.25,3.68,4.41,4.74c11.47,5.63,22.87,11.39,34.31,17.07c1.93,0.96,3.74,2.03,4.98,3.86 C386.09,284.98,386.09,286.73,386.09,288.48z M253,287.97c-27.32,0.05-44.73-29.1-31.45-52.85c1.47-2.62,1.17-3.98-0.85-5.99 c-22.3-22.13-44.51-44.35-66.75-66.54c-1.95-1.95-3.89-3.9-5.85-5.83c-0.7-0.69-1.42-1.62-2.54-0.68 c-0.85,0.71-1.89,1.41-1.55,2.76c0.24,0.96,0.62,1.9,0.99,2.83c18.93,47.23,37.89,94.45,56.76,141.71 c1.03,2.57,2.57,4.03,5.09,4.99c18.03,6.83,36.04,13.71,54.01,20.7c2.49,0.97,4.05,0.58,5.91-1.29 c20.49-20.58,41.04-41.09,61.65-61.55c1.84-1.83,2.34-3.37,1.36-5.89c-7.01-17.93-13.91-35.9-20.74-53.9 c-1.02-2.69-2.66-4.2-5.33-5.26c-23.4-9.25-46.76-18.63-70.13-27.96c-24.07-9.61-48.15-19.19-72.21-28.82 c-1.91-0.76-3.6-1.29-4.91,0.81c-1.25,2,0.8,2.65,1.71,3.57c23.88,23.91,47.82,47.76,71.69,71.69c1.78,1.78,3.02,2.22,5.4,0.86 c6.55-3.75,13.65-5.27,21.29-4.44c19.38,2.1,32.92,18.17,31.98,38.19C287.69,273.03,271.61,287.94,253,287.97z M340.71,273.76 c-1.71-0.1-2.49,0.98-3.35,1.85c-20.56,20.51-41.1,41.04-61.7,61.51c-1.49,1.48-1.75,2.67-0.77,4.56 c4.02,7.78,7.95,15.6,11.76,23.48c1.25,2.58,2.26,2.73,4.28,0.71c25.21-25.24,50.46-50.44,75.74-75.61 c1.79-1.78,1.99-2.81-0.56-4.04c-7.89-3.81-15.7-7.8-23.55-11.7C341.9,274.18,341.18,273.95,340.71,273.76z M275.53,252.45 c0.06-12.93-9.83-22.98-22.65-23.03c-12.61-0.05-22.96,10.26-22.98,22.89c-0.02,12.62,9.91,22.57,22.62,22.68 C265.57,275.11,275.47,265.41,275.53,252.45z"></path>
                    </g>
                  </svg>
                </span>
                <h3 className="heading_h3 text-white font-semibold">
                  <a title="UI/UX Creative Design" href="/service/1">
                    UI/UX Creative Design
                  </a>
                </h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod labore.
                </p>
              </div>
            </div>
            <div className="gridItem">
              <div className="serviceBox relative z-[1] flex min-h-[20rem] w-full flex-col flex-wrap justify-center gap-3 p-[1.875rem] md:min-h-[24.375rem] md:p-7 lg:p-10 xl:p-[3.125rem]">
                <div className="serviceBg absolute inset-0 z-[-1] rounded-[10px] bg-[#f0e1d4] bg-[url('/images/patternImg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply before:absolute before:inset-0 before:z-[1] before:rounded-[10px] before:bg-[#f0e1d4] before:opacity-70 sm:rounded-[1.25rem] before:sm:rounded-[1.25rem] md:rounded-[3.125rem] before:md:rounded-[3.125rem]"></div>
                <span className="mb-[.9375rem] inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 387 387"
                    className="h-[4.25rem] w-[4.25rem] fill-[#f6371c]"
                  >
                    <g>
                      <path d="M350.2,97.31c2.95,0,5.05-0.02,7.14,0c13.05,0.17,23.63,10.56,23.64,23.59c0.06,60.25,0.06,120.5,0,180.75 c-0.01,13.22-10.59,23.68-23.9,23.7c-39.29,0.06-78.59,0.02-117.88,0.03c-5.28,0-5.29,0.01-3.59,5.1 c1.69,5.09,3.48,10.14,5.04,15.27c0.7,2.31,1.95,3.15,4.33,3.09c5.11-0.13,10.23-0.09,15.34-0.01c4.66,0.07,6.78,2.26,6.9,6.95 c0.05,1.99,0.01,3.99,0.02,5.99c0.01,4.99,0.01,5,4.85,5c17.34,0,34.68,0,52.02,0.01c1.25,0,2.51-0.07,3.74,0.11 c3.19,0.45,5.32,3.03,5.21,6.27c-0.11,3.32-1.9,5.34-5.11,5.98c-1.2,0.24-2.49,0.13-3.73,0.13c-86.07,0-172.14,0-258.22,0 c-1.25,0-2.51,0.07-3.73-0.12c-3.16-0.49-5.26-3.13-5.1-6.37c0.17-3.31,1.99-5.3,5.22-5.88c1.21-0.22,2.49-0.11,3.73-0.11 c17.34-0.01,34.68,0,52.02-0.01c4.84,0,4.84-0.01,4.85-5c0-2-0.03-3.99,0.02-5.99c0.12-4.69,2.23-6.88,6.9-6.95 c5.24-0.08,10.48-0.08,15.72,0c2.06,0.03,3.19-0.72,3.83-2.72c1.88-5.94,3.87-11.85,5.91-17.74c0.74-2.12,0.25-3.1-2.07-2.99 c-1,0.05-2,0-2.99,0c-38.42,0-76.84,0.01-115.26,0c-15.95-0.01-25.81-9.92-25.81-25.96c-0.01-58.75-0.01-117.51,0-176.26 c0-15.99,9.89-25.84,25.91-25.85c11.98-0.01,23.95-0.09,35.93,0.05c3.06,0.04,4.13-0.87,4.09-4.02c-0.15-12.1-0.08-24.2-0.05-36.3 c0.02-5.61,2.06-7.61,7.72-7.64c6.74-0.03,13.47-0.02,20.21-0.01c6.69,0.01,8.5,1.78,8.51,8.36c0.02,11.73-0.01,23.45,0.02,35.18 c0.01,1.99-0.72,4.47,2.84,4.39c3.32-0.07,2.58-2.41,2.59-4.26c0.03-25.57,0.02-51.14,0.02-76.72c0-7.19,1.65-8.86,8.75-8.87 c6.74-0.01,13.47-0.03,20.21,0.01c5.38,0.03,7.48,2.1,7.48,7.5c0.03,26.07,0,52.14,0.05,78.21c0,1.56-0.8,3.69,1.96,4.08 c3.01,0.42,3.51-1.15,3.5-3.73c-0.07-17.71-0.04-35.43-0.03-53.14c0-7.38,1.61-8.97,9.02-8.98c6.24-0.01,12.47-0.01,18.71,0 c7.07,0.01,8.72,1.69,8.72,8.9c0.01,17.59,0.08,35.18-0.06,52.77c-0.03,3.26,0.91,4.29,4.23,4.27c21.33-0.13,42.66-0.06,63.99-0.09 c1.08,0,2.53,0.53,3.16-0.47c0.75-1.19-0.76-1.93-1.36-2.76c-24.47-33.43-4.95-80.66,36.14-86.2 c35.52-4.79,61.38,23.15,61.61,52.66c0.1,12.72-3.61,24.03-11.16,34.18C351.5,95.28,351.13,95.91,350.2,97.31z M194.88,276.95 c56.39,0,112.77-0.02,169.16,0.06c3.27,0,4.57-0.67,4.56-4.31c-0.12-49.65-0.07-99.3-0.09-148.95c0-9.19-4.71-13.88-13.83-13.94 c-5.49-0.03-10.98,0.06-16.47-0.04c-2.68-0.05-5.13,0.46-7.6,1.52c-14.78,6.35-29.57,6.08-44.28-0.29 c-1.63-0.7-3.22-1.22-5.02-1.22c-27.44,0.03-54.89,0.05-82.33-0.03c-2.8-0.01-3.66,0.94-3.64,3.69c0.11,13.35,0.05,26.7,0.04,40.04 c0,1.97-0.11,3.75,2.78,3.73c2.96-0.02,2.68-1.92,2.68-3.82c0-10.23-0.03-20.46,0.02-30.69c0.02-5.36,2.12-7.4,7.54-7.44 c6.99-0.04,13.97-0.03,20.96,0c5.92,0.02,7.92,1.97,7.93,7.81c0.03,12.85,0.02,25.7,0,38.55c-0.01,6.1-1.95,8.05-8.07,8.05 c-17.09,0.02-34.18,0.01-51.27,0.01c-45.53,0-91.06,0-136.6-0.01c-6.21,0-8.16-1.89-8.17-7.94c-0.02-13.1-0.04-26.2,0.01-39.3 c0.02-4.93,2.18-7.11,7.06-7.15c7.23-0.06,14.47-0.05,21.71-0.01c5.61,0.03,7.64,2.06,7.66,7.7c0.03,10.23,0.02,20.46,0.01,30.69 c0,1.82-0.09,3.48,2.58,3.55c2.81,0.07,2.91-1.56,2.9-3.62c-0.03-13.35-0.1-26.7,0.05-40.04c0.03-3.03-1.04-3.84-3.92-3.8 c-11.48,0.13-22.95,0.05-34.43,0.05c-10.69,0.01-15.07,4.35-15.07,14.95c-0.01,49.03,0,98.05,0,147.08c0,5.11,0.01,5.11,5.12,5.11 C82.86,276.95,138.87,276.95,194.88,276.95z M195.4,289.45c-55.87,0-111.73,0-167.6,0c-1.12,0-2.25,0.05-3.37,0 c-1.88-0.08-2.75,0.74-2.71,2.66c0.07,3.12-0.16,6.25,0.11,9.35c0.56,6.52,5.18,10.89,11.77,11.37c1.49,0.11,2.99,0.05,4.49,0.05 c104,0,208-0.11,312,0.14c14.16,0.03,19.32-4.59,18.47-18.47c-0.31-5.07-0.06-5.09-5.2-5.09 C307.38,289.45,251.39,289.45,195.4,289.45z M140.96,88.41c0-21.46-0.05-42.92,0.05-64.37c0.01-3.01-0.78-4.51-3.98-4.08 c-0.74,0.1-1.5,0.01-2.24,0.01c-5.27,0.01-5.28,0.01-5.28,5.33c0,41.67-0.01,83.34,0.01,125c0,7.74-0.95,6.64,7.09,6.94 c3.51,0.13,4.44-1.05,4.42-4.46C140.9,131.33,140.96,109.87,140.96,88.41z M330.44,67.88c-5.23,0-10.46,0.07-15.69-0.04 c-2.15-0.04-3.76,0.6-5.29,2.15c-7.52,7.63-15.07,15.23-22.74,22.7c-2.08,2.02-1.75,3.01,0.57,4.34 c8.48,4.87,17.43,6.81,27.23,5.67c16.32-1.89,31.5-15.58,34.8-31.7c0.49-2.39-0.04-3.18-2.44-3.14 C341.4,67.94,335.92,67.89,330.44,67.88z M302.65,40.47c0-5.35-0.14-10.72,0.05-16.06c0.12-3.19-0.89-3.77-3.91-3.04 c-26.85,6.47-39.99,38.57-25.3,61.9c1.42,2.26,2.35,2.61,4.35,0.54c7.47-7.68,15.07-15.22,22.7-22.74 c1.55-1.52,2.19-3.14,2.14-5.29C302.57,50.69,302.65,45.58,302.65,40.47z M194.82,348.81c9.86,0,19.71-0.09,29.56,0.05 c3.14,0.05,3.64-0.99,2.65-3.74c-1.97-5.52-3.84-11.07-5.58-16.67c-0.71-2.29-1.93-3.12-4.32-3.1c-14.6,0.08-29.19,0.11-43.79-0.02 c-2.81-0.03-3.98,1.12-4.74,3.6c-1.61,5.24-3.44,10.42-5.16,15.63c-1.37,4.14-1.31,4.24,2.93,4.25 C175.85,348.82,185.34,348.81,194.82,348.81z M182.88,100.56c0-17.59-0.05-35.18,0.05-52.77c0.02-2.88-0.79-4.27-3.81-3.87 c-0.86,0.11-1.74,0.01-2.62,0.02c-5.06,0.01-5.07,0.01-5.07,5.16c0,33.68-0.02,67.37,0.01,101.05c0.01,7.88-0.97,6.79,6.93,7.11 c3.69,0.15,4.62-1.14,4.59-4.68C182.79,135.24,182.88,117.9,182.88,100.56z M87.6,109.54c0,14.6,0.06,29.19-0.05,43.79 c-0.02,2.89,0.79,4.27,3.81,3.87c0.86-0.11,1.74-0.01,2.62-0.02c5.06-0.01,5.07-0.01,5.07-5.16c0-27.7,0.02-55.39-0.01-83.09 c-0.01-7.88,0.97-6.79-6.93-7.11c-3.69-0.15-4.63,1.13-4.59,4.68C87.7,80.84,87.6,95.19,87.6,109.54z M332.57,55.38 c4.74,0,9.47-0.06,14.2,0.02c2.26,0.04,3.06-0.52,2.56-3.05c-2.92-14.63-16.43-28.17-31.09-31.13c-2.44-0.49-3.13,0.13-3.11,2.49 c0.06,9.47,0.08,18.94-0.01,28.41c-0.02,2.39,0.79,3.37,3.25,3.3C323.1,55.29,327.84,55.38,332.57,55.38z M195.27,366.77 c18.57,0,37.13-0.05,55.7,0.05c2.93,0.02,4.34-0.88,3.67-3.86c-0.58-2.57-2.8-1.61-4.34-1.61c-36.76-0.05-73.52-0.04-110.28-0.04 c-0.62,0-1.25,0.04-1.87,0c-2.25-0.14-2.7,1.15-2.65,3.07c0.09,3.07,2.35,2.37,4.07,2.37 C158.14,366.78,176.71,366.77,195.27,366.77z M57.13,142.48c0-2.25,0.04-4.49-0.01-6.74c-0.19-9.05,1.67-7.83-8.24-8 c-2.47-0.04-3.27,0.94-3.23,3.32c0.1,6.11-0.05,12.23,0.05,18.34c0.14,8.8-1.78,7.68,8.42,7.81c2.29,0.03,3.09-0.91,3.04-3.12 C57.05,150.21,57.12,146.34,57.13,142.48z M224.8,142.48c0-2.25,0.04-4.49-0.01-6.74c-0.19-9.05,1.68-7.83-8.24-8.01 c-2.47-0.04-3.28,0.93-3.24,3.32c0.1,6.11-0.05,12.23,0.05,18.34c0.14,8.81-1.78,7.68,8.41,7.81c2.29,0.03,3.1-0.91,3.04-3.12 C224.72,150.22,224.8,146.35,224.8,142.48z M111.55,133.5c0,6.72,0.01,13.44,0,20.15c0,1.81-0.11,3.48,2.56,3.56 c2.78,0.08,2.93-1.5,2.92-3.58c-0.03-13.44-0.02-26.87-0.01-40.31c0-1.81,0.11-3.48-2.56-3.56c-2.78-0.08-2.94,1.5-2.92,3.58 C111.58,120.07,111.55,126.79,111.55,133.5z M158.93,133.8c0-6.84-0.01-13.68,0.01-20.53c0.01-1.85,0.02-3.47-2.62-3.5 c-2.45-0.03-2.87,1.21-2.87,3.26c0.04,13.68,0.03,27.37,0.01,41.05c0,1.86,0.34,3.08,2.62,3.12c2.46,0.05,2.89-1.21,2.87-3.26 C158.89,147.23,158.93,140.51,158.93,133.8z"></path>
                      <path d="M33.18,223.49c-0.03-8.8,5.57-16.07,13.92-18.06c8.46-2.02,17.1,2.06,20.79,10.11c1.07,2.32,2.42,3.8,4.79,4.78 c18.21,7.5,36.39,15.08,54.54,22.74c2.59,1.09,4.11,0.76,5.98-1.51c6.79-8.21,18.92-8.93,26.57-1.51c2.4,2.33,3.79,2.04,6.18,0.22 c18.59-14.08,37.26-28.05,55.94-42c1.87-1.4,3.11-3.01,3.95-5.23c2.84-7.49,9.19-11.84,16.91-11.89 c8.07-0.05,14.34,4.1,17.36,11.75c0.74,1.88,1.84,3.13,3.53,4.11c18.75,10.91,37.52,21.8,56.19,32.85 c2.72,1.61,4.02,0.69,5.87-1.28c5.57-5.94,14.38-7.22,21.67-3.45c7.13,3.68,11.06,11.96,9.41,19.85 c-1.61,7.72-8.16,13.75-15.72,14.47c-8.62,0.82-16.02-3.46-19.14-11.29c-0.84-2.11-2.04-3.56-3.97-4.68 c-18.65-10.83-37.29-21.69-55.89-32.62c-2.33-1.37-3.69-1.22-5.63,0.89c-7.02,7.66-18.64,8.01-26.09,0.75 c-2.25-2.19-3.59-1.98-5.88-0.25c-18.69,14.15-37.47,28.19-56.24,42.23c-1.74,1.3-3.01,2.75-3.8,4.88 c-2.76,7.46-8.96,11.93-16.36,12.12c-8.19,0.2-14.46-3.66-17.71-11.24c-0.89-2.07-2.3-3.07-4.21-3.86 c-18.3-7.6-36.61-15.19-54.87-22.92c-2.71-1.15-4.15-0.47-5.94,1.7c-5.02,6.1-13.32,8.02-20.71,5.19 C37.66,237.66,33.21,231.1,33.18,223.49z M248.57,199.42c0.04-2.8-2.67-5.59-5.48-5.63c-2.78-0.04-5.57,2.69-5.62,5.5 c-0.04,2.81,2.66,5.57,5.49,5.61C245.78,204.94,248.52,202.26,248.57,199.42z M51.26,228.89c2.75,0.09,5.54-2.54,5.68-5.34 c0.14-2.77-2.4-5.57-5.23-5.77c-2.88-0.2-5.86,2.58-5.89,5.5C45.8,226.03,48.48,228.8,51.26,228.89z M338.84,235.71 c-2.78,0-5.55,2.77-5.55,5.56c0,2.81,2.74,5.55,5.55,5.55c2.82,0,5.54-2.72,5.55-5.55C344.38,238.46,341.64,235.71,338.84,235.71z  M147.34,258.8c2.83-0.08,5.5-2.87,5.42-5.67c-0.08-2.82-2.9-5.52-5.67-5.44c-2.81,0.08-5.5,2.9-5.42,5.69 C141.75,256.21,144.53,258.87,147.34,258.8z"></path>
                      <path d="M311.84,121.25c8.59,0,17.19-0.03,25.78,0.01c4.87,0.02,7.51,2.35,7.43,6.38c-0.08,3.84-2.7,6.08-7.35,6.09 c-15.32,0.03-30.64,0.07-45.96-0.03c-2.82-0.02-4.91,0.72-6.91,2.8c-6.22,6.46-12.64,12.72-19,19.05 c-2.29,2.28-4.96,2.88-7.84,1.38c-2.78-1.45-3.61-3.98-3.1-6.97c0.27-1.55,1.29-2.66,2.36-3.73c7.49-7.49,14.99-14.95,22.44-22.48 c1.79-1.81,3.82-2.56,6.35-2.53C294.65,121.3,303.25,121.26,311.84,121.25z"></path>
                      <path d="M72.17,187.65c-10.46,0-20.92,0.02-31.39-0.01c-4.95-0.01-7.57-2.23-7.57-6.25c0-4.01,2.63-6.23,7.58-6.23 c21.05-0.02,42.1-0.02,63.14,0c4.93,0.01,7.58,2.24,7.57,6.24c0,4-2.65,6.22-7.58,6.24C93.34,187.67,82.75,187.65,72.17,187.65z"></path>
                      <path d="M269.6,271.48c-6.6,0-13.19,0.05-19.79-0.02c-4.5-0.04-7.1-2.51-7-6.42c0.1-3.73,2.65-6.02,7.01-6.03 c13.44-0.05,26.88-0.05,40.33,0c4.35,0.01,6.91,2.32,7.01,6.04c0.1,3.9-2.52,6.37-7.02,6.41 C283.29,271.52,276.44,271.48,269.6,271.48z"></path>
                      <path d="M281.73,253.49c-2.98,0-5.97,0.11-8.95-0.03c-3.68-0.18-6.04-2.73-6.02-6.23c0.02-3.51,2.38-6.07,6.1-6.15 c6.09-0.13,12.18-0.14,18.27,0.01c3.68,0.09,6.05,2.72,6.03,6.22c-0.02,3.49-2.4,6-6.1,6.17 C287.95,253.6,284.83,253.5,281.73,253.49z"></path>
                      <path d="M126.02,187.56c-1.24,0-2.5,0.14-3.72-0.03c-3.18-0.43-5.28-2.96-5.26-6.19c0.02-3.22,2.13-5.78,5.35-6.09 c2.34-0.22,4.72-0.19,7.06-0.06c3.66,0.2,6.02,2.75,6,6.24c-0.02,3.49-2.4,5.92-6.09,6.17c-1.11,0.08-2.23,0.01-3.35,0.01 C126.02,187.6,126.02,187.58,126.02,187.56z"></path>
                      <path d="M57.75,294.92c5.6,0,11.2-0.05,16.8,0.01c4.51,0.05,7.12,2.49,7.03,6.4c-0.09,3.72-2.65,6.04-6.99,6.06 c-11.45,0.05-22.9,0.05-34.34,0c-4.5-0.02-7.11-2.49-7.02-6.4c0.09-3.73,2.64-6.01,6.99-6.06 C46.05,294.87,51.9,294.92,57.75,294.92z"></path>
                      <path d="M96.33,307.41c-6.48,0-9.32-1.98-9.22-6.42c0.1-4.28,2.82-6.08,9.19-6.08c6.48,0,9.33,1.98,9.23,6.42 C105.42,305.6,102.68,307.41,96.33,307.41z"></path>
                    </g>
                  </svg>
                </span>
                <h3 className="heading_h3 text-black font-semibold">
                  <a title="Desktop Application" href="/service/2">
                    Desktop Application
                  </a>
                </h3>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod labore.
                </p>
              </div>
            </div>
            <div className="gridItem">
              <div className="serviceBox relative z-[1] flex min-h-[20rem] w-full flex-col flex-wrap justify-center gap-3 p-[1.875rem] md:min-h-[24.375rem] md:p-7 lg:p-10 xl:p-[3.125rem]">
                <div className="serviceBg absolute inset-0 z-[-1] rounded-[10px] bg-[#d4e4f0] bg-[url('/images/patternImg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply before:absolute before:inset-0 before:z-[1] before:rounded-[10px] before:bg-[#d4e4f0] before:opacity-70 sm:rounded-[1.25rem] before:sm:rounded-[1.25rem] md:rounded-[3.125rem] before:md:rounded-[3.125rem]"></div>
                <span className="mb-[.9375rem] inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 425 376"
                    className="h-[4.25rem] w-[4.25rem] fill-[#f6371c]"
                  >
                    <g>
                      <path d="M0.85,336.07c0-98.63,0-197.26,0-295.89c0.43-1.45,0.9-2.89,1.3-4.35C7.77,15.48,26.18,1.1,47.27,1.09 C157.47,1.02,267.66,1,377.86,1.1c25.37,0.02,46.42,21.16,46.44,46.4c0.07,93.81,0.07,187.61,0,281.42 c-0.02,25.09-21.01,46.23-46.11,46.25c-110.47,0.09-220.95,0.06-331.42,0.01c-11.01,0-20.72-3.87-29.23-10.84 C8.51,356.96,3.51,347.21,0.85,336.07z M212.44,113.96c-63.78,0-127.56,0-191.34,0c-5.81,0-5.89,0.08-5.89,5.68 c0,68.46,0,136.92-0.01,205.39c0,3.74,0.41,7.44,1.34,11.04c3.88,15.1,16.74,24.45,34.1,24.45c107.86,0.05,215.72,0.04,323.58-0.02 c5.79,0,11.56-0.73,16.85-3.43c13.09-6.67,18.58-17.81,18.58-32.04c0.02-68.05,0.01-136.1,0.01-204.15c0-6.92,0-6.92-7.13-6.92 C339.17,113.96,275.8,113.96,212.44,113.96z M212.35,98.72c63.77,0,127.54,0,191.32,0c5.92,0,5.99-0.09,5.99-6.02 c0.01-13.91,0.07-27.82-0.03-41.73c-0.04-5.81-0.79-11.55-3.52-16.82c-6.96-13.41-18.61-18.38-33.05-18.38 c-107.02,0.01-214.04,0-321.06,0.02c-4.13,0-8.28,0.26-12.27,1.35c-15.22,4.16-24.35,16.52-24.48,33.23 c-0.11,13.77-0.03,27.55-0.03,41.32c0,7.01,0,7.02,7.06,7.02C85.63,98.73,148.99,98.73,212.35,98.72z"></path>
                      <path d="M231.69,163.63c-1.86,8.94-3.93,19.04-6.06,29.14c-7.04,33.39-14.1,66.78-21.16,100.17c-0.2,0.94-0.38,1.89-0.65,2.81 c-1.36,4.71-4.77,7.27-8.62,6.48c-4.36-0.89-6.85-4.88-5.87-9.82c1.57-7.96,3.29-15.9,4.96-23.84 c7.35-34.87,14.7-69.75,22.06-104.62c0.28-1.35,0.55-2.7,0.96-4.02c1.34-4.34,4.74-6.59,8.68-5.82 C229.78,154.83,231.88,157.88,231.69,163.63z"></path>
                      <path d="M175.14,188.96c-0.07,3.36-2.08,5.54-4.46,7.56c-11.02,9.36-21.93,18.85-33.09,28.05c-3.06,2.52-2.74,3.85,0.07,6.18 c10.18,8.43,20.21,17.05,30.26,25.64c1.98,1.69,4.03,3.39,5.65,5.41c2.36,2.95,2.21,6.24-0.32,9.04c-2.47,2.74-5.58,3.47-8.96,1.61 c-1.2-0.66-2.3-1.52-3.35-2.4c-13.65-11.59-27.27-23.2-40.9-34.8c-0.52-0.45-1.04-0.9-1.53-1.39c-4.24-4.18-4.4-8.66,0.06-12.52 c14.48-12.51,29.1-24.88,43.69-37.27c2.63-2.23,5.67-2.9,8.85-1.42C173.68,183.85,174.88,186.16,175.14,188.96z"></path>
                      <path d="M309.41,227.74c0.1,2.58-1.2,4.52-3.02,6.08c-14.65,12.53-29.29,25.07-44.05,37.47c-3.77,3.16-7.88,2.79-10.71-0.37 c-2.92-3.25-2.64-7.54,1.27-10.93c11.22-9.76,22.6-19.33,33.92-28.98c3.92-3.34,3.92-3.36,0.13-6.59 c-10.58-9.02-21.18-18.04-31.75-27.07c-1.15-0.98-2.34-1.95-3.32-3.09c-2.68-3.09-2.78-6.88-0.38-9.79 c2.29-2.78,6.38-3.45,9.72-1.31c1.96,1.25,3.7,2.86,5.48,4.37c12.8,10.88,25.58,21.79,38.37,32.68 C307.41,222.2,309.57,224.29,309.41,227.74z"></path>
                      <path d="M74.71,57.71c-0.02,12.51-10.09,22.48-22.63,22.4c-12.12-0.08-22.29-10.25-22.4-22.42C29.57,45.54,40.02,35.05,52.3,35.02 C64.68,34.99,74.72,45.16,74.71,57.71z M52.2,50.32c-4.18,0.03-7.24,3.1-7.27,7.28c-0.03,4.19,3,7.23,7.24,7.27 c4.32,0.04,7.76-3.33,7.62-7.47C59.65,53.34,56.37,50.28,52.2,50.32z"></path>
                      <path d="M120.08,80.18C107.72,80.14,97.82,70.34,97.67,58c-0.15-12.24,10.15-22.68,22.46-22.79c12.34-0.11,22.48,10.11,22.46,22.63 C142.58,70.5,132.78,80.23,120.08,80.18z M127.75,57.76c-0.02-4.07-3.61-7.45-7.8-7.35c-3.96,0.1-7.2,3.47-7.19,7.48 c0.01,3.9,3.4,7.36,7.3,7.47C123.92,65.47,127.77,61.66,127.75,57.76z"></path>
                      <path d="M165.79,57.99c0.03-12.71,9.86-22.4,22.63-22.31c12.36,0.09,22.4,10.19,22.3,22.42c-0.1,12.37-10.62,22.73-22.83,22.49 C175.49,80.34,165.76,70.39,165.79,57.99z M188.3,65.47c3.99-0.11,7.3-3.52,7.29-7.51c-0.02-4.1-3.78-7.69-7.81-7.44 c-3.8,0.23-7.33,4.07-7.15,7.78C180.83,62.28,184.36,65.58,188.3,65.47z"></path>
                    </g>
                  </svg>
                </span>
                <h3 className="heading_h3 text-black font-semibold">
                  <a title="Website Development" href="/service/3">
                    Website Development
                  </a>
                </h3>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod labore.
                </p>
              </div>
            </div>
            <div className="gridItem">
              <div className="serviceBox relative z-[1] flex min-h-[20rem] w-full flex-col flex-wrap justify-center gap-3 p-[1.875rem] md:min-h-[24.375rem] md:p-7 lg:p-10 xl:p-[3.125rem]">
                <div className="serviceBg before:bg-gray absolute inset-0 z-[-1] rounded-[10px] bg-[#e6d5f1] bg-[url('/images/patternImg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply before:absolute before:inset-0 before:z-[1] before:rounded-[10px] before:opacity-70 sm:rounded-[1.25rem] before:sm:rounded-[1.25rem] md:rounded-[3.125rem] before:md:rounded-[3.125rem]"></div>
                <span className="mb-[.9375rem] inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 386 386"
                    className="h-[4.25rem] w-[4.25rem] fill-[#f6371c]"
                  >
                    <g>
                      <path d="M385.59,78.4c-2.9,9.53-8.75,16.13-18.74,18.44c-1.92,0.44-3.96,0.51-5.94,0.51c-111.55,0.02-223.09,0.03-334.64,0.01 c-12.29,0-20.02-6-24.68-18.97c0-19.46,0-38.92,0-58.39c2.79-9.7,9.04-15.92,18.75-18.71c115.5,0,231,0,346.5,0 c9.71,2.78,15.95,9.03,18.75,18.71C385.59,39.48,385.59,58.94,385.59,78.4z M193.59,80.57c54.48,0,108.96,0,163.45,0 c1.62,0,3.25,0.04,4.87-0.06c4.2-0.27,6.96-2.69,6.99-6.8c0.12-16.34,0.12-32.67,0-49.01c-0.03-3.96-2.7-6.44-6.63-6.76 c-1.62-0.13-3.25-0.09-4.87-0.09c-109.21,0-218.43,0-327.64,0c-1.5,0-3-0.04-4.5,0.06c-4.34,0.28-6.99,2.78-7.02,7.17 c-0.1,16.09-0.1,32.18,0,48.26c0.03,4.39,2.68,6.89,7.03,7.16c1.62,0.1,3.25,0.06,4.87,0.06C84.63,80.57,139.11,80.57,193.59,80.57 z"></path>
                      <path d="M1.59,307.45c2.89-9.54,8.75-16.12,18.73-18.44c1.92-0.45,3.96-0.51,5.94-0.51c111.55-0.02,223.1-0.03,334.65-0.01 c12.29,0,19.98,5.96,24.68,18.97c0,19.46,0,38.92,0,58.39c-4.71,13.01-12.39,18.97-24.68,18.97 c-111.55,0.01-223.09,0.01-334.64-0.01c-1.98,0-4.02-0.07-5.94-0.51c-9.98-2.33-15.85-8.9-18.74-18.44 C1.59,346.38,1.59,326.91,1.59,307.45z M193.58,305.28c-34.99,0-69.98,0-104.97,0c-20.12,0-40.24-0.01-60.36,0 c-8.15,0.01-10.08,1.97-10.09,10.22c-0.01,5.49-0.01,10.97,0,16.46c0.01,9.48-0.06,18.96,0.06,28.43c0.06,4.83,2.64,7.33,7.42,7.56 c1.37,0.07,2.75,0.04,4.12,0.04c109.21,0,218.43,0,327.64,0c1.5,0,3,0.04,4.5-0.06c4.34-0.28,6.99-2.78,7.02-7.17 c0.1-16.09,0.1-32.18,0-48.26c-0.03-4.39-2.68-6.89-7.03-7.16c-1.62-0.1-3.25-0.06-4.87-0.06 C302.55,305.28,248.07,305.28,193.58,305.28z"></path>
                      <path d="M385.59,222.12c-2.9,9.53-8.75,16.12-18.74,18.44c-1.8,0.42-3.71,0.51-5.57,0.51c-31.73,0.03-63.46,0.05-95.19,0.01 c-14.46-0.02-24.72-10.31-24.75-24.79c-0.04-15.58-0.04-31.17,0-46.75c0.03-14.49,10.28-24.76,24.76-24.77 c30.86-0.03,61.72,0.3,92.57-0.15c13.85-0.2,23.57,7.17,26.93,19.12C385.59,183.2,385.59,202.66,385.59,222.12z M313.98,161.57 c-15.61,0-31.23-0.03-46.84,0.01c-6.53,0.02-8.94,2.34-8.96,8.7c-0.05,15.08-0.05,30.17,0,45.25c0.02,6.37,2.43,8.74,8.92,8.74 c30.98,0.03,61.95,0.03,92.93,0c6.63-0.01,8.95-2.37,8.97-9.08c0.04-14.83,0.04-29.67,0-44.5c-0.02-6.86-2.32-9.1-9.31-9.12 C344.46,161.55,329.22,161.57,313.98,161.57z"></path>
                      <path d="M1.59,165.98c2.23-4.03,5.65-5.49,10.24-5.49c62.49,0.08,124.99,0.05,187.49,0.04c2.14,0,4.25,0.07,6.2,1.12 c2.92,1.57,4.41,4.12,4.41,7.31c0,3.19-1.49,5.74-4.41,7.32c-2.07,1.12-4.31,1.12-6.57,1.12c-62.25-0.01-124.49-0.03-186.74,0.05 c-4.69,0.01-8.32-1.27-10.62-5.49C1.59,169.97,1.59,167.98,1.59,165.98z"></path>
                      <path d="M1.59,213.89c2.23-4.03,5.65-5.49,10.24-5.49c62.49,0.08,124.99,0.05,187.49,0.04c2.14,0,4.25,0.07,6.2,1.12 c2.92,1.57,4.41,4.12,4.41,7.31c0,3.19-1.49,5.74-4.41,7.32c-2.07,1.12-4.31,1.12-6.57,1.12c-62.25-0.01-124.49-0.03-186.74,0.05 c-4.69,0.01-8.32-1.27-10.62-5.49C1.59,217.88,1.59,215.88,1.59,213.89z"></path>
                    </g>
                  </svg>
                </span>
                <h3 className="heading_h3 text-black font-semibold">
                  <a title="Wireframing Services" href="/service/4">
                    Wireframing Services
                  </a>
                </h3>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
