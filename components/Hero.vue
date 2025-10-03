<template>
  <div class="relative w-full h-[800px] overflow-hidden">
    <video
      :src="video"
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-screen h-[800px] object-cover z-0"
    ></video>

    <div
      class="relative z-10 flex flex-col justify-end items-start h-full container-wide"
    >
      <h1
        class="uppercase text-[40px] md:text-[120px] font-cormorant font-normal leading-[42px] md:leading-[120px] tracking-tighter text-white mb-10"
      >
        A place <br />where <i>brands</i> <br />are built
      </h1>
    </div>
  </div>
</template>

<script setup>
import video from "~/assets/images/hero-bg.mp4";
</script>
