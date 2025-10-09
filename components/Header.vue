<script setup>
const openNav = false;
</script>
<template>
  <header class="fixed bg-white z-50 w-full">
    <div class="container-wide flex items-center justify-center w-full h-16">
      <NuxtLink to="/" class="hover:cursor-pointer">
        <img src="~/assets/images/logo.png" class="w-[160px]" />
      </NuxtLink>
      <nav class="ml-auto cursor-pointer" @click="openNav">
        <div class="space-y-2">
          <span class="block h-0.5 w-8 bg-black"></span>
          <span class="block h-0.5 w-8 bg-black"></span>
        </div>
      </nav>
    </div>
  </header>
</template>
