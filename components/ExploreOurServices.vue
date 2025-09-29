<script setup>
import { ref } from "vue";
import ServicesDropdown from "@/components/ServicesDropdown.vue";

const openIndex = ref(null);

const toggleDropdown = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <div class="border-b border-black">
    <div
      class="py-40 container-wide flex flex-row-reverse gap-40 w-full justify-between"
    >
      <!-- Tekst + dropdown -->
      <div class="basis-1/2 flex flex-col justify-between pr-6 pb-20">
        <div class="ml-20">
          <h4 class="uppercase font-cormorant text-xl mt-20">
            Explore our services
          </h4>
          <span class="font-signature font-bold ml-14">
            carefully crafted, deeply rooted
          </span>
        </div>

        <div>
          <ServicesDropdown
            title="Branding"
            :isOpen="openIndex === 0"
            @toggle="toggleDropdown(0)"
          >
            <p class="font-openSauce">
              Our studio provides customized branding packages designed
              specifically for your business requirements. We craft visually
              appealing branding that not only attracts customers but also
              effectively communicates your brand's mission, values and
              narrative. We attentively listen to your goals and vision,
              ensuring the creation of a brand that fully represents your
              business, making a lasting impact and standing out.
            </p>
          </ServicesDropdown>

          <ServicesDropdown
            title="Social media"
            :isOpen="openIndex === 1"
            @toggle="toggleDropdown(1)"
          >
            <p class="font-openSauce">
              Social Media Management is the consistent and daily effort to
              handle your various social platforms. Our focus is on executing
              your unique strategy and maintaining your preferred aesthetics. By
              taking care of these tasks, we enable you to direct your attention
              to other important priorities, confident that your social media
              presence is in capable hands.
            </p>
          </ServicesDropdown>

          <ServicesDropdown
            title="Web development"
            :isOpen="openIndex === 2"
            @toggle="toggleDropdown(2)"
          >
            <p class="font-openSauce">
              Our studio creates modern, functional, and aesthetically refined
              websites tailored to your brand’s identity. We focus on delivering
              a seamless user experience, ensuring your website not only looks
              visually engaging but also performs flawlessly across all devices.
              Every element is thoughtfully designed to align with your goals,
              from intuitive navigation to responsive layouts and optimized
              performance. With us, your digital presence becomes a powerful
              extension of your brand—captivating, effective, and built to grow
              with your business.
            </p>
          </ServicesDropdown>
        </div>
      </div>

      <!-- Slike -->
      <div class="relative basis-1/2">
        <img
          src="~/assets/images/rocks.png"
          alt="Decorative mirror"
          class="h-full object-cover relative z-10 pl-28"
        />
        <img
          src="~/assets/images/envelopekc.png"
          alt="Woman in field"
          class="h-[400px] w-[340px] object-cover absolute top-24 left-0 z-10"
        />
      </div>
    </div>
  </div>
</template>
