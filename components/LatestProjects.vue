<script setup>
import card1 from "~/assets/images/istrience-card.png";
import card2 from "~/assets/images/menwa-card.png";
import card3 from "~/assets/images/bliss-properties-card.png";
</script>

<template>
  <div class="border-b py-40">
    <div class="container-wide w-full">
      <div class="grid grid-cols-3 gap-4">
        <div>
          <span class="text-2xl">( 01 )</span>
          <img
            :src="card1"
            class="w-full h-[620px] object-cover border border-black p-2 mt-4"
          />
        </div>
        <div>
          <span class="text-2xl">( 02 )</span>
          <img
            :src="card2"
            class="w-full h-[620px] object-cover border border-black p-2 mt-4"
          />
        </div>
        <div>
          <span class="text-2xl">( 03 )</span>
          <img
            :src="card3"
            class="w-full h-[620px] object-cover border border-black p-2 mt-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>
