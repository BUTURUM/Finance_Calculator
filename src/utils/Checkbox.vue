<template>
  <button
    class="primary rounded-full p-0.5 border-2 border-solid transition-colors duration-200"
    :class="[checked ? 'bg-box border-transparent' : 'bg-none  border-outline']"

    @click="checked = !checked"
  >
    <Check
      class="fill-high size-6 transition-transform duration-200"
      :class="[checked ? 'scale-100' : 'scale-0']"
    />
  </button>
</template>
<script setup>
  import Check from '../assets/check.svg?component';

  const checked = defineModel();
</script>