<template>
  <div class="border-b border-black pb-10">
    <div class="container-wide relative h-[900px] flex justify-between">
      <div class="flex flex-col justify-between h-auto">
        <img :src="shell" class="w-48" />
        <h1
          class="uppercase text-[80px] font-cormorant font-normal leading-[80px] tracking-tighter"
        >
          A place <br />where <i>brands</i> <br />are built
        </h1>
      </div>
      <img :src="website" class="w-[800px] float-right" />
    </div>
  </div>
</template>
<script setup>
import shell from "~/assets/images/shell.png";
import website from "~/assets/images/hero-website-example.png";
</script>
