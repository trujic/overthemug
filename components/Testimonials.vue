<script setup>
import { ref } from "vue";

const testimonials = [
  {
    text: `A big thank you to the creative and and managing team!
Proffessional and modern approach to social media marketing. Open to suggestions and quite
adaptable during projects and campaigns.`,
    signature: "Igor P.",
  },
  {
    text: `I chose OvertheMug  to collaborate with because I knew they would understand  my way of working and representing the brand. They are very dedicated and often served as a voice of reason when I shared certain ideas with them. All my clients and friends have recognized their work on my profile, and i've only had words of praise and compliments. Besides the great profile growth, the sales of my product also developed nicely. Thank you OvertheMug!`,
    signature: "Mikos Jewelry",
  },
  {
    text: `I was truly impressed with the whole process – from the first to the last detail, everything exceeded my expectations. Thank you for your patience, professionalism, and creativity; every step was thoughtful and dedicated. What meant the most to me was how you turned my logo into exactly what I wanted, even though I couldn’t fully shape it myself. The colors, fonts, and visual identity perfectly reflect me and my brand. Now my brand looks sophisticated, strong, and authentic – just the way I imagined it. If anyone is looking for a team they can completely trust, it’s definitely you.`,
    signature: "Kristina C.",
  },
  {
    text: `Lidija and her team have greatly contributed to the visual appereance of my Instagram profile. They provided me with new ideas and guidance on the direction I should go and introduced some innovations that have proven to be very useful. I am grateful to them for everything!`,
    signature: "Tania P.",
  },
];

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};
</script>

<template>
  <div class="p-0 md:p-10 text-center py-10 md:py-40 border-b">
    <h2 class="text-4xl mb-6 font-pinyon tracking-[5px] font-bold">
      ( love words from clients )
    </h2>

    <div class="flex items-center justify-center">
      <div class="max-w-full md:max-w-5xl">
        <div class="flex items-center justify-center gap-10 md:gap-40">
          <Icon
            @click="prev"
            name="material-symbols-light:arrow-back-ios-rounded"
            size="35"
            class="shrink-0 font-light hover:cursor-pointer"
          />

          <!-- Make text take up space and control alignment -->
          <div class="max-w-3xl flex items-center">
            <p class="text-xl font-cormorant font-extralight p-6">
              {{ testimonials[currentIndex].text }}
            </p>
          </div>

          <Icon
            @click="next"
            name="material-symbols-light:arrow-forward-ios-rounded"
            size="35"
            class="shrink-0 font-light hover:cursor-pointer"
          />
        </div>
        <span
          class="relative font-pinyon font-bold float-right z-40 text-2xl tracking-[5px]"
        >
          — {{ testimonials[currentIndex].signature }}
        </span>
      </div>
    </div>
  </div>
</template>
