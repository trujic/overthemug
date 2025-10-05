<script setup>
import eagle from "~/assets/images/eagle.png";
import envelope from "~/assets/images/envelope-otm.png";
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
  instagram: "",
  aboutBrand: "",
  services: "",
});
</script>

<template>
  <div class="container-wide relative pb-40">
    <form name="contact" method="POST" data-netlify="true" hidden>
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="instagram" />
      <input type="text" name="aboutBrand" />
      <input type="text" name="services" />
      <textarea name="message"></textarea>
    </form>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="relative max-w-2xl mx-auto p-14 border space-y-10 bg-white mt-[-100px] z-20"
    >
      <input type="hidden" name="form-name" value="contact" />

      <!-- NAME -->
      <div>
        <label class="block mb-1 uppercase font-openSauce font-light">
          Name and surname <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.name"
          type="text"
          name="name"
          class="w-full border-b border-black p-2 bg-transparent focus:outline-none font-openSauce"
          required
        />
      </div>

      <!-- EMAIL -->
      <div>
        <label class="block mb-1 uppercase font-openSauce">
          Email <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.email"
          type="email"
          name="email"
          class="w-full border-b border-black p-2 bg-transparent focus:outline-none font-openSauce"
          required
        />
      </div>

      <!-- INSTAGRAM -->
      <div>
        <label class="block mb-1 uppercase font-openSauce">
          Instagram handle <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.instagram"
          type="text"
          name="instagram"
          class="w-full border-b border-black p-2 bg-transparent focus:outline-none font-openSauce"
          required
        />
      </div>

      <!-- ABOUT BRAND -->
      <div>
        <label class="block mb-1 uppercase font-openSauce">
          What does your brand do <span class="text-red-500">*</span>
        </label>
        <input
          v-model="form.aboutBrand"
          type="text"
          name="aboutBrand"
          class="w-full border-b border-black p-2 bg-transparent focus:outline-none font-openSauce"
          required
        />
      </div>

      <!-- SERVICES -->
      <div>
        <label class="block mb-1 uppercase font-openSauce">
          What services are you interested in?
        </label>
        <input
          v-model="form.services"
          type="text"
          name="services"
          class="w-full border-b border-black p-2 bg-transparent focus:outline-none font-openSauce"
        />
      </div>

      <!-- MESSAGE -->
      <div>
        <label class="block mb-1 uppercase font-openSauce">
          Tell us more about your brand
        </label>
        <textarea
          v-model="form.message"
          name="message"
          class="w-full border-b border-black p-2 bg-transparent focus:outline-none font-openSauce"
        ></textarea>
      </div>

      <!-- BUTTON -->
      <div class="flex justify-end">
        <button
          type="submit"
          class="px-6 py-3 text-black border rounded-full hover:bg-gray-800 uppercase tracking-wide align-right font-openSauce"
        >
          Send
        </button>
      </div>
    </form>
    <img
      :src="envelope"
      class="w-[1100px] absolute top-0 ml-auto mr-auto left-0 right-0 text-center z-2"
    />
  </div>
</template>
