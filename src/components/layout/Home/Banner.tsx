import NextImage from "@/components/NextImage";
import React from "react";
import Banner_inner from "./Banner_inner";
import SocialMedia from "./SocialMedia";

function Banner() {
  return (
    <div className="Hero_Sec grandian-bg rounded-br-0 relative mt-[-130px] bg-[#070918] py-20 bg-blend-hard-light sm:rounded-br-[10rem] md:rounded-br-[15rem] lg:rounded-br-[18rem] xl:rounded-br-[20rem] 2xl:rounded-br-[20rem]">
      <div className="shaps absolute inset-0">
        <NextImage
          className="floatAnim animDelay1 absolute left-[10%] top-[10%]"
          src={"/images/whitedot.png"}
          alt="Black Dot"
          width={38}
          height={52}
        />
        <NextImage
          className="floatAnim animDelay2 absolute bottom-[20%] left-[10%]"
          src={"/images/bluedot.png"}
          alt="Blue Dot"
          width={38}
          height={38}
        />
        <NextImage
          className="floatAnim animDelay3 absolute bottom-[50%] right-[50%]"
          src={"/images/blackdot2.png"}
          alt="Blue Dot"
          width={38}
          height={38}
        />

        <NextImage
          className="floatAnim animDelay5 absolute right-[10%] top-[10%]"
          src={"/images/blackdot1.png"}
          alt="Black Dot"
          width={38}
          height={52}
        />
        <NextImage
          className="floatAnim animDelay4 absolute bottom-[40%] right-[15%]"
          src={"/images/whitedot.png"}
          alt="Black Dot"
          width={38}
          height={48}
        />
      </div>
      <div className="flex items-center">
      <SocialMedia  />
      <Banner_inner />
      </div>
      <span className="absolute bottom-[-.75rem] left-0 h-6 w-1/2 bg-[#f6371c]"></span>
    </div>
  );
}

export default Banner;
