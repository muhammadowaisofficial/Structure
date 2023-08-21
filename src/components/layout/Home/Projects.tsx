import React from 'react'
import ProjectSlider from './ProjectSlider'

function Projects() {
  return (
    <div className="Project-Sec grandian-bg rounded-br-0 relative z-[-2] bg-[#070918] py-20 bg-blend-hard-light sm:rounded-tl-[10rem] md:rounded-tl-[15rem] lg:rounded-tl-[18rem] xl:rounded-tl-[20rem] 2xl:rounded-tl-[20rem]">
      <div className="div_container">
      <div className="secTitle">
            <h1 className="heading_h1 text-white font-bold relative text-center">
              <i className="absolute left-1/2 top-[-12%] z-[-1] ml-[-1.75rem] h-[3.5rem] w-[3.5rem] rounded-[10px] bg-[#f61c1c3a] text-black dark:bg-[#000] dark:text-white md:top-[-15%] md:ml-[-2.8125rem] md:h-[5.625rem] md:w-[5.625rem] md:rounded-[1.25rem]"></i>
              My Work{" "}
              <span className="fontCaveat relative text-[1.875rem] font-bold text-[#f6371c] md:text-[3.125rem]">
              Experience
              </span>
            </h1>
            <p className="text-white text-center 2xl:w-[50%] xl:w-[50%] lg:w-[80%] w-[100%] m-auto pt-5 py-7 text-[18px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
      </div>
    <ProjectSlider />
      <span className="absolute bottom-[-.75rem] right-0 h-6 w-1/2 bg-[#f6371c]"></span>
    </div>
  )
}

export default Projects