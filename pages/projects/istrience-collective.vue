<script setup>
import bgImage from "~/assets/images/mission-bg.png";
import bgImage2 from "~/assets/images/projects-bg.png";
import rocks from "~/assets/images/rocks.png";
import menwaCard from "~/assets/images/menwa-card.png";
import istrienceCard from "~/assets/images/istrience-card.png";

// inline style object
const bg = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover", // makes it cover the whole container
  backgroundPosition: "center", // centers the image
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
    <div :style="bg" class="h-[700px]">
      <h2>Bliss Properties</h2>
    </div>
    <div class="max-w-[1100px] m-auto py-20">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ducimus
        enim mollitia aperiam optio modi placeat repudiandae eaque fugiat
        accusamus commodi, nulla pariatur vel laudantium eum quae distinctio ea
        nesciunt.
      </p>
      <div class="flex gap-6">
        <!-- Left big image -->
        <img :src="menwaCard" class="object-cover" />

        <!-- Right column -->
        <div class="flex flex-col w-1/2 gap-6">
          <img :src="menwaCard" class="flex-1 object-cover" />
          <img :src="menwaCard" class="flex-1 object-cover" />
        </div>
      </div>

      <!-- <img :src="rocks" class="h-full" />
      <div class="flex flex-col gap-6">
        <p class="font-cormorant text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ea.
          Eligendi, illum ut. Alias, quis facere! Architecto quae perferendis ut
          eaque eum, consectetur autem facere odit adipisci quasi laudantium at.
        </p>
        <img :src="menwaCard" class="p-4 border w-full" />
      </div> -->
    </div>
    <div :style="bg2" class="h-[600px]"></div>
    <div class="grid grid-cols-2 max-w-[1100px] gap-14 m-auto py-20">
      <img :src="rocks" class="h-full" />
      <div class="self-end mb-6">
        <div class="flex font-cormorant gap-10 font-thin">
          <span>/01</span>
          <span class="text-3xl uppercase font-thin">timeless</span>
        </div>
        <div class="flex font-cormorant gap-10 font-thin">
          <span>/02</span>
          <span class="text-3xl font-thin">timeless</span>
        </div>
        <div class="flex font-cormorant gap-10">
          <span>/03</span>
          <span class="text-3xl uppercase font-thin">timeless</span>
        </div>
        <div class="flex font-cormorant gap-10">
          <span>/04</span>
          <span class="text-3xl font-thin">timeless</span>
        </div>
        <div class="flex font-cormorant gap-10">
          <span>/05</span>
          <span class="text-3xl uppercase font-thin">timeless</span>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-[1.15fr_0.85fr] max-w-[1100px] gap-14 m-auto py-10"
    >
      <img :src="rocks" />
      <img :src="menwaCard" class="h-full object-cover" />
    </div>
    <div class="grid grid-cols-3 gap-4 h-[600px] mx-6">
      <img :src="rocks" class="w-full h-full object-cover" />
      <img :src="menwaCard" class="w-full h-full object-cover" />
      <img :src="istrienceCard" class="w-full h-full object-cover" />
    </div>
  </div>
</template>
<style lang="css" scoped>
img {
  padding: 10px;
  border: 1px solid black;
}
</style>
