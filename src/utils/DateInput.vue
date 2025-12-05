<template>
  <input
    class="rounded-sm bg-box p-1.5 text-high outline-none"
    v-model="internal"
    type="date"
    ref="input"
  >
</template>
<style>

</style>
<script setup>
  import { DateTime } from 'luxon';
  import { computed, markRaw, onMounted, useTemplateRef, watch } from 'vue';

  const input = useTemplateRef('input');
  const date = defineModel({ required: true });

  const { future } = defineProps({
    future: {
      type: Boolean, default: false
    }
  });

  const internal = computed({
    get(){
      return date.value ? date.value.toISODate() : '';
    },
    set(value){
      date.value = value ? markRaw(DateTime.fromISO(value).startOf('day')) : null;
    }
  });

  onMounted(() => {
    if(future) input.value.min = DateTime.now().startOf('day').toISODate();
  });

  watch(internal, (v) => console.log(v));
</script>