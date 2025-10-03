<script setup>
const props = defineProps({
  title: { type: String, required: true },
  isOpen: { type: Boolean, default: false },
});

const emits = defineEmits(["toggle"]);
</script>

<template>
  <div class="border-b border-black">
    <button
      @click="$emit('toggle')"
      class="w-full py-4 flex justify-between items-center"
    >
      <h3 class="text-5xl font-extralight uppercase font-cormorant">
        {{ title }}
      </h3>
      <Icon
        :name="
          isOpen
            ? 'material-symbols-light:remove'
            : 'material-symbols-light:add'
        "
        size="30"
      />
    </button>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="py-4 text-lg font-light text-gray-700 max-w-[680px]"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
