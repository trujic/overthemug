<script setup lang="ts">
const { data: posts, error } = await useFetch("/api/instagram-feed");

// Compute finalPosts reactively
const finalPosts = computed(() => {
  if (!posts.value) return [];
  // slice(0, 9) → first 9 posts, slice(9) → everything *after* the 9th
  return posts.value.slice(0, 8);
});

if (error.value) {
  console.error("Failed to load Instagram feed:", error.value);
}
</script>

<template>
  <footer
    class="bg-dark-green min-h-[500px] pt-[200px] md:pt-[350px] pb-[60px]"
  >
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <div
        v-for="post in finalPosts"
        :key="post.id"
        class="overflow-hidden shadow hover:scale-105 transition w-40 h-40 md:w-52 md:h-52"
      >
        <a :href="post.permalink" target="_blank" rel="noopener">
          <img
            v-if="
              post.media_type === 'IMAGE' ||
              post.media_type === 'CAROUSEL_ALBUM'
            "
            :src="post.media_url"
            :alt="post.caption || 'Instagram image'"
            class="object-cover w-full h-full"
          />
          <img
            v-else-if="post.media_type === 'VIDEO'"
            controls
            class="object-cover w-full h-full"
            :src="post.thumbnail_url"
          />
        </a>
      </div>
    </div>

    <div class="container-wide text-white text-center">
      <h3 class="text-3xl mb-4 uppercase">Follow us</h3>
      <a
        href="https://instagram.com/overthemug"
        target="_blank"
        rel="noopener"
        class="underline transition"
      >
        Instagram
      </a>
    </div>
  </footer>
</template>
