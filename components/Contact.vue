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

const successMessage = ref(""); // new
const errorMessage = ref("");

const config = useRuntimeConfig();

const sendEmail = async () => {
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": config.public.brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: form.name,
          email: form.email,
        },
        to: [{ email: "info@overthemug.com", name: "Lidija" }],
        subject: "New email from website",
        htmlContent: `<html><head></head><body><p>Name: ${form.name}</p><p>Email: ${form.email}</p><p>Instagram: ${form.instagram}</p><p>What does your brand do?: ${form.aboutBrand}</p><p>What services do you want?: ${form.services}</p>Additional Message: ${form.message}</p></body></html>`,
      }),
    });

    if (res.ok) {
      successMessage.value =
        "Thank you for getting in touch! We will get back to you as soon as we can.";
      errorMessage.value = "";

      // Optionally, reset the form
      Object.keys(form).forEach((key) => (form[key] = ""));
    } else {
      const data = await res.json();
      errorMessage.value = "Something went wrong. Please try again.";
      console.error(data);
    }
  } catch (err) {
    console.error(err);
    errorMessage.value = "Something went wrong. Please try again.";
  }
};
</script>

<template>
  <div class="container-wide relative pb-40">
    <div v-if="!successMessage">
      <form
        @submit.prevent="sendEmail"
        name="contact"
        class="relative max-w-2xl mx-auto p-6 md:p-14 border space-y-10 bg-white mt-[-40px] md:mt-[-100px] z-20"
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
    </div>
    <div
      v-else
      class="relative max-w-2xl mx-auto p-10 md:p-14 border space-y-10 bg-white mt-[-40px] md:mt-[-100px] z-20"
    >
      <p v-if="successMessage" class="text-base">
        {{ successMessage }}
      </p>
      <p v-if="errorMessage" class="text-base">
        {{ errorMessage }}
      </p>
    </div>
    <img
      :src="envelope"
      class="w-[1100px] absolute bottom-[-180px] md:top-0 ml-auto mr-auto left-0 right-0 text-center z-2"
    />
  </div>
</template>
