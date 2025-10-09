<script setup>
import bgImage from "~/assets/images/projects-bg.png";
import card1 from "~/assets/images/bliss-properties-card.png";
import card2 from "~/assets/images/istrience-card.png";

// inline style object
const bg = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover", // makes it cover the whole container
  backgroundPosition: "center", // centers the image
  backgroundRepeat: "no-repeat", // prevents tiling
};
</script>

<template>
  <div class="border-b py-16 md:py-40" :style="bg">
    <div class="container-wide w-full">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-[1000px] m-auto"
      >
        <NuxtLink to="/projects/bliss-properties" class="hover:cursor-pointer">
          <img
            :src="card1"
            class="w-full h-[320px] md:h-[620px] object-cover mb-6"
          />
          <span class="uppercase text-white text-xl"
            >01 / branding project</span
          >
        </NuxtLink>
        <NuxtLink
          to="/projects/istrience-collective"
          class="hover:cursor-pointer"
        >
          <img
            :src="card2"
            class="w-full h-[320px] md:h-[620px] object-cover mb-6"
          />
          <span class="uppercase text-white mt-6 text-xl"
            >02 / branding & web project</span
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
