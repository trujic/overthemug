<script setup>
import { ref } from "vue";

const testimonials = [
  {
    text: `What we build isn't just seen - it's felt, with depth, intention, and a lasting impact. Beyond the surface, we seek meaning that endures, stories that speak, and moments that transform.`,
    signature: "Nemanja Trujic",
  },
  {
    text: `What we build isn't just seen - it's felt, with depth, intention, and a lasting impact. Beyond the surface, we seek meaning that endures, stories that speak, and moments that transform.`,
    signature: "Lidija Trujic",
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
  <div class="p-10 text-center py-40 border-b">
    <h2 class="text-xl mb-6 font-signature font-bold">
      ( Love words from clients )
    </h2>

    <div class="flex items-center justify-center gap-40">
      <!-- Prev button -->
      <Icon
        @click="prev"
        name="material-symbols-light:arrow-back-ios-rounded"
        size="35"
        class="font-light hover:cursor-pointer"
      />
      <!-- Testimonial -->
      <div class="max-w-3xl">
        <p class="italic mb-4 text-3xl font-cormorant font-extralight">
          {{ testimonials[currentIndex].text }}
        </p>
        <span class="relative font-signature font-bold float-right z-40">
          — {{ testimonials[currentIndex].signature }}
        </span>
      </div>

      <!-- Next button -->
      <Icon
        @click="next"
        name="material-symbols-light:arrow-forward-ios-rounded"
        size="35"
        class="font-light hover:cursor-pointer"
      />
    </div>
  </div>
</template>
