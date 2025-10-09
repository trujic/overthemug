<script setup>
import bgImage from "~/assets/images/mission-bg.png";
/* import bgImage2 from "~/assets/images/projects-bg.png"; */
import submark from "~/assets/images/projects/istrience/submark.png";
import istrienceCard from "~/assets/images/istrience-card.png";
import bgImage2 from "~/assets/images/projects/istrience/bg.png";
/* import businessEnvelopeCard from "~/assets/images/projects/istrience/envelope-card.png"; */
import visitCard from "~/assets/images/projects/istrience/visit-card.png";
import paper from "~/assets/images/projects/istrience/paper.png";
import istrienceBox from "~/assets/images/projects/istrience/istrience-box.png";
import feed from "~/assets/images/projects/istrience/feed-preview.png";
import mobileView from "~/assets/images/projects/istrience/mobile-view.png";
import bowLetter from "~/assets/images/projects/istrience/bowletter.png";
import envelopes from "~/assets/images/projects/istrience/envelopes.png";
import laptop from "~/assets/images/projects/istrience/laptop.png";
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
    <div class="h-[300px]">
      <video
        :src="video"
        autoplay
        muted
        loop
        playsinline
        class="h-[300px] w-full object-cover"
      ></video>
    </div>
    <div class="max-w-[800px] m-auto py-10 md:py-20 px-6 md:px-auto">
      <p class="mb-6 text-[12px]">
        Istrience Collective is a boutique agency specializing in business
        travel, corporate events, and leisure team experiences in Istria. We
        help companies and professionals organize meetings, incentives,
        conferences, and unique team activities. In addition, we support
        international professionals in exploring, working, and settling in
        Istria.
      </p>

      <div
        class="grid grid-cols-2 md:grid-cols-[65%_35%] grid-row-none grid-rows-2 gap-4 max-h-[700px] hidden md:grid"
      >
        <!-- Left big image -->
        <div class="row-span-2">
          <img
            :src="submark"
            class="h-full w-full object-cover object-[center_10%]"
          />
        </div>

        <!-- Top-right image -->
        <div>
          <img :src="bowLetter" class="h-full w-full object-cover" />
        </div>

        <!-- Bottom-right image -->
        <div>
          <img :src="istrienceCard" class="h-full w-full object-cover" />
        </div>
      </div>
      <div class="grid gap-4 max-h-[700px] block md:hidden">
        <!-- Big image -->
        <div class="h-[300px] md:h-full">
          <img
            :src="submark"
            class="h-full w-full object-cover object-[center_16%]"
          />
        </div>

        <!-- Bottom two images -->
        <div
          class="grid grid-cols-2 gap-4 md:grid-cols-1 md:grid-rows-2 md:grid-flow-col md:gap-4"
        >
          <div class="h-[150px] md:h-full">
            <img :src="bowLetter" class="h-full w-full object-cover" />
          </div>
          <div class="h-[150px] md:h-full">
            <img :src="istrienceCard" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
    <div class="p-6 md:p-14 bg-[#ffffff]">
      <div class="flex flex-col gap-6 max-w-[700px] m-auto text-center">
        <Icon
          name="fluent:text-quote-opening-16-filled"
          style="color: #bdb6a2"
          class="m-auto h-10 w-full"
        />
        <p class="italic font-cormorant text-xl md:text-2xl">
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
    <div :style="bg2" class="h-[300px] md:h-[600px]"></div>
    <div
      class="grid grid-cols-[1.25fr_0.75fr] md:grid md:grid-cols-2 max-w-[800px] gap-6 md:gap-14 m-auto pt-10 md:pt-20 pb-6 px-6 md:px-0"
    >
      <img :src="feed" class="h-[350px] md:h-[700px] w-full object-cover" />
      <div class="self-end flex flex-col gap-2 italic mb-6">
        <div class="flex font-cormorant gap-2 md:gap-10 font-thin">
          <span class="text-[13px] md:text-base">/ 01</span>
          <span class="text-[13px] md:text-3xl uppercase font-thin"
            >authentic</span
          >
        </div>
        <div class="flex font-cormorant gap-2 md:gap-10 font-thin">
          <span class="text-[13px] md:text-base">/ 02</span>
          <span class="text-[13px] md:text-3xl font-thin">seamless</span>
        </div>
        <div class="flex font-cormorant gap-2 md:gap-10">
          <span class="text-[13px] md:text-base">/ 03</span>
          <span class="text-[13px] md:text-3xl uppercase font-thin">local</span>
        </div>
        <div class="flex font-cormorant gap-2 md:gap-10">
          <span class="text-[13px] md:text-base">/ 04</span>
          <span class="text-[13px] md:text-3xl font-thin">professional</span>
        </div>
        <div class="flex font-cormorant gap-2 md:gap-10">
          <span class="text-[13px] md:text-base">/ 05</span>
          <span class="text-[13px] md:text-3xl uppercase font-thin"
            >exclusive</span
          >
        </div>
      </div>
    </div>
    <div class="px-6 md:px-0">
      <img
        :src="paper"
        class="h-[400px] md:h-[800px] w-full max-w-[800px] m-auto object-cover"
      />
    </div>
    <div
      class="flex flex-col md:grid md:grid-cols-[1.15fr_0.85fr] max-w-[800px] gap-6 m-auto py-6 px-6 md:px-0"
    >
      <img
        :src="envelopes"
        class="h-[400px] md:h-[700px] w-full object-cover object-[70%_50%]"
      />
      <img
        :src="mobileView"
        class="h-[400px] md:h-[700px] w-full object-cover"
      />
    </div>
    <div class="max-w-[800px] m-auto flex flex-col uppercase py-6 px-6 md:px-0">
      <p>Branding & web by us:</p>
      <a
        href="https://istrience-collective.com"
        target="_blank"
        class="text-black"
        >https://istrience-collective.com</a
      >
    </div>
  </div>
</template>
<style lang="css" scoped>
img {
  padding: 10px;
  border: 1px solid black;
}
</style>
