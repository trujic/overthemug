<script setup>
/* import bgImage from "~/assets/images/mission-bg.png"; */
import bgImage2 from "~/assets/images/projects-bg.png";
import rocks from "~/assets/images/rocks.png";
import menwaCard from "~/assets/images/menwa-card.png";
import istrienceCard from "~/assets/images/istrience-card.png";
import bgImage from "~/assets/images/projects/istrience/bg.png";
import businessEnvelopeCard from "~/assets/images/projects/istrience/envelope-card.png";
import visitCard from "~/assets/images/projects/istrience/visit-card.png";
import istrienceBox from "~/assets/images/projects/istrience/istrience-box.png";
import feed from "~/assets/images/projects/istrience/feed-preview.png";
import mobileView from "~/assets/images/projects/istrience/mobile-view.png";
import orange from "~/assets/images/projects/istrience/orange.png";
import envelopes from "~/assets/images/projects/istrience/envelopes.png";
import video from "~/assets/images/projects/istrience/video.mp4";

// inline style object
const bg = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover", // makes it cover the whole container
  backgroundPosition: "50% 65%", // centers the image
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
    <div :style="bg" class="h-[700px]"></div>
    <div class="max-w-[1000px] m-auto py-20">
      <p class="mb-6">
        Istrience Collective is a boutique agency specializing in business
        travel, corporate events, and leisure team experiences in Istria. We
        help companies and professionals organize meetings, incentives,
        conferences, and unique team activities. In addition, we support
        international professionals in exploring, working, and settling in
        Istria.
      </p>

      <div class="grid grid-cols-[65%_35%] grid-rows-2 gap-4 max-h-[700px]">
        <!-- Left big image -->
        <div class="row-span-2">
          <video
            :src="video"
            autoplay
            muted
            loop
            playsinline
            class="h-[700px] w-full p-[10px] border"
          ></video>
        </div>

        <!-- Top-right image -->
        <div>
          <img :src="visitCard" class="h-full w-full" />
        </div>

        <!-- Bottom-right image -->
        <div>
          <img :src="istrienceCard" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
    <div class="p-14 bg-[#ffffff]">
      <div class="flex flex-col gap-6 max-w-[700px] m-auto text-center">
        <Icon
          name="fluent:text-quote-opening-16-filled"
          style="color: #bdb6a2"
          class="m-auto h-10 w-full"
        />
        <p class="italic font-cormorant text-2xl">
          I just want to say a huge thank you for everything – you turned my
          idea into reality and brought to life exactly what I had imagined, but
          even more beautifully. I’m truly grateful for the story you created.
          So happy and proud that we met and worked together, and I will
          definitely recommend you to everyone!
        </p>
        <Icon
          name="fluent:text-quote-16-filled"
          style="color: #bdb6a2"
          class="m-auto h-10 w-full"
        />
      </div>
    </div>
    <div :style="bg2" class="h-[600px]"></div>
    <div class="grid grid-cols-2 max-w-[1000px] gap-14 m-auto pt-20 pb-6">
      <img :src="feed" class="h-[700px] w-full object-cover" />
      <div class="self-end flex flex-col gap-4 italic mb-6">
        <div class="flex font-cormorant gap-10 font-thin">
          <span>/01</span>
          <span class="text-3xl uppercase font-thin">authentic</span>
        </div>
        <div class="flex font-cormorant gap-10 font-thin">
          <span>/02</span>
          <span class="text-3xl font-thin">seamless</span>
        </div>
        <div class="flex font-cormorant gap-10">
          <span>/03</span>
          <span class="text-3xl uppercase font-thin">local</span>
        </div>
        <div class="flex font-cormorant gap-10">
          <span>/04</span>
          <span class="text-3xl font-thin">professional</span>
        </div>
        <div class="flex font-cormorant gap-10">
          <span>/05</span>
          <span class="text-3xl uppercase font-thin">exclusive</span>
        </div>
      </div>
    </div>
    <img
      :src="envelopes"
      class="h-[800px] w-full max-w-[1000px] m-auto object-cover"
    />
    <div
      class="grid grid-cols-[1.15fr_0.85fr] max-w-[1000px] gap-6 m-auto py-6"
    >
      <img :src="istrienceBox" class="h-[700px] w-full object-cover" />
      <img :src="mobileView" class="h-[700px] w-full object-cover" />
    </div>
    <div :style="bg2" class="h-[600px]"></div>
    <div class="grid grid-cols-[1.2fr_0.8fr] max-w-[1000px] gap-6 m-auto py-6">
      <img :src="rocks" />
      <img :src="menwaCard" class="h-full object-cover" />
    </div>
    <div class="grid grid-cols-[0.8fr_1.2fr] max-w-[1000px] gap-6 m-auto py-6">
      <img :src="rocks" />
      <img :src="menwaCard" class="h-full object-cover" />
    </div>
  </div>
</template>
<style lang="css" scoped>
img {
  padding: 10px;
  border: 1px solid black;
}
</style>
