<script setup>
import bgImage from "~/assets/images/mission-bg.png";

// inline style object
const bg = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover", // makes it cover the whole container
  backgroundPosition: "center", // centers the image
  backgroundRepeat: "no-repeat", // prevents tiling
  backgroundAttachment: "fixed", // <-- keeps it still while scrolling
};
</script>

<template>
  <div :style="bg" class="w-full h-[740px]">
    <div
      class="relative float-right top-1/2 -translate-y-1/2 mr-80 max-w-[450px]"
    >
      <h2 class="uppercase mb-6 font-openSauce text-3xl">Our Mission</h2>
      <p class="font-cormorant text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad ducimus
        ea possimus vitae temporibus hic, praesentium unde accusantium ut autem
        quam iste ab dolore reprehenderit nihil doloribus velit dolores?
      </p>
      <span
        class="relative font-pinyon tracking-[5px] font-bold float-right z-40 text-3xl mt-6 mr-[-80px]"
      >
        — Lidija
      </span>
    </div>
  </div>
</template>
