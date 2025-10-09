<script setup>
import bgImage from "~/assets/images/projects/bliss-properties/bg.png";
import bgImage2 from "~/assets/images/projects/bliss-properties/bg2.png";
import room from "~/assets/images/projects/bliss-properties/room.jpg";
import room2 from "~/assets/images/projects/bliss-properties/room2.jpg";
import pillows from "~/assets/images/projects/bliss-properties/pillows.jpg";
import bp from "~/assets/images/projects/bliss-properties/bp.png";
import bp2 from "~/assets/images/projects/bliss-properties/bp2.png";
import seal from "~/assets/images/projects/bliss-properties/bp-seal.png";
import blissCircle from "~/assets/images/projects/bliss-properties/bliss-circle.jpg";
import envelopes from "~/assets/images/projects/bliss-properties/envelopes.png";
import house from "~/assets/images/projects/bliss-properties/bliss-house.png";
import businessCard from "~/assets/images/projects/bliss-properties/business-card.png";
import bathtub from "~/assets/images/projects/bliss-properties/bathtub.png";
import rocks from "~/assets/images/rocks.png";
import blissCard from "~/assets/images/bliss-properties-card.png";
import istrienceCard from "~/assets/images/istrience-card.png";
import video from "~/assets/images/projects/bliss-properties/video.mp4";

// inline style object
const bg = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover", // makes it cover the whole container
  backgroundPosition: "50% 75%", // centers the image
  backgroundRepeat: "no-repeat", // prevents tiling
};

const bg2 = {
  backgroundImage: `url(${bgImage2})`,
  backgroundSize: "cover", // makes it cover the whole container
  backgroundPosition: "center", // centers the image
  backgroundRepeat: "no-repeat", // prevents tiling
  backgroundAttachment: "fixed",
};
</script>
<template>
  <div class="bg-white">
    <div :style="bg" class="h-[300px] md:h-[700px]"></div>
    <div
      class="md:grid md:grid-cols-2 max-w-[1000px] gap-14 m-auto px-6 md:px-auto py-10 md:py-20"
    >
      <div class="hidden md:block h-[700px]">
        <img :src="house" class="h-full w-full object-cover !border-none" />
      </div>
      <div class="flex flex-col gap-6 h-[500px] md:h-[700px]">
        <p class="font-cormorant text-xl italic">
          Bliss Properties is a real estate agency that connects buyers and
          sellers, offering complete support — from valuation to contract — and
          managing every detail for a seamless buying, selling, or renting
          experience.
        </p>
        <img
          :src="blissCard"
          class="p-4 border w-full h-full overflow-hidden"
        />
      </div>
    </div>
    <div :style="bg2" class="h-[500px] md:h-[600px]"></div>
    <div
      class="grid grid-cols-[1.25fr_0.75fr] md:grid-cols-2 max-w-[1100px] gap-4 md:gap-14 m-auto px-6 md:px-auto py-10 md:py-20"
    >
      <img :src="bathtub" class="h-[260px] md:h-[700px] w-full object-cover" />
      <div class="self-end flex flex-col gap-2 italic mb-6">
        <div class="flex font-cormorant gap-2 md:gap-10 font-thin">
          <span class="text-[13px] md:text-base">/ 01</span>
          <span class="text-[13px] md:text-3xl uppercase font-thin"
            >reliable</span
          >
        </div>
        <div class="flex font-cormorant gap-2 md:gap-10 font-thin">
          <span class="text-[13px] md:text-base">/ 02</span>
          <span class="text-[13px] md:text-3xl font-thin font-pinyon"
            >comprehensive</span
          >
        </div>
        <div class="flex font-cormorant gap-2 md:gap-10">
          <span class="text-[13px] md:text-base">/ 03</span>
          <span class="text-[13px] md:text-3xl uppercase font-thin"
            >efficient</span
          >
        </div>
        <div class="flex font-cormorant gap-2 md:gap-10">
          <span class="text-[13px] md:text-base">/ 04</span>
          <span class="text-[13px] md:text-3xl font-thin font-pinyon"
            >personalized</span
          >
        </div>
        <div class="flex font-cormorant gap-2 md:gap-10">
          <span class="text-[13px] md:text-base">/ 05</span>
          <span class="text-[13px] md:text-3xl uppercase font-thin"
            >trustworthy</span
          >
        </div>
      </div>
    </div>
    <div
      class="md:grid md:grid-cols-[1.15fr_0.85fr] max-w-[1100px] gap-14 m-auto py-auto md:py-10 px-6 md:px-auto"
    >
      <img :src="bp2" class="h-[700px] w-full object-cover hidden md:block" />
      <video
        :src="video"
        autoplay
        muted
        loop
        playsinline
        class="h-[400px] md:h-[700px] w-full p-[10px] border"
      ></video>
    </div>
    <div class="md:grid md:grid-cols-3 gap-4 mx-6 pb-10">
      <img
        :src="envelopes"
        class="w-full h-[700px] object-cover hidden md:block"
      />
      <img
        :src="seal"
        class="h-[400px] md:h-[700px] w-full object-cover my-10 md:my-auto md:py-auto"
      />
      <img
        :src="businessCard"
        class="w-full h-[400px] md:h-[700px] object-cover object-bottom"
      />
    </div>
  </div>
</template>
<style lang="css" scoped>
img {
  padding: 10px;
  border: 1px solid black;
}
</style>
