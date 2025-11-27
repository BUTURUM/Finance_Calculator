<template>
  <div v-if="open">
    <div class="box absolute top-[50%] left-[50%] w-[80%] translate-[-50%] z-10">
      <slot></slot>
    </div>
    <div @click="close" class="bg-black opacity-25 fixed top-0 bottom-0 left-0 right-0"></div>
  </div>
</template>
<script setup>
  const open = defineModel();

  function close(){
    open.value = false;
  }
</script>