<template>
  <div
    @click="use"
    class="rounded-sm bg-box p-1.5 inline-block"
    :class="[date ? 'text-high' : 'text-low']"
    v-bind="$attrs"
  >
    {{ display }}
  </div>
  <input class="hidden" v-model="internal" @change="update" type="date" ref="input">
</template>
<script setup>
  import { DateTime } from 'luxon';
  import { computed, markRaw, onMounted, useTemplateRef } from 'vue';

  defineOptions({ inheritAttrs: false });

  const input = useTemplateRef('input');
  const date = defineModel({ required: true });

  const { future } = defineProps({
    future: {
      type: Boolean, default: false
    }
  })

  const internal = computed({
    get(){
      return date.value.toISODate();
    },
    set(value){
      date.value = DateTime.fromISO(value);
    }
  })
  const display = computed(() => date.value.toFormat('dd.LL.yyyy'));

  function update(event){
    date.value = markRaw(DateTime.fromJSDate(event.target.valueAsDate));
  }

  function use(){
    input.value.showPicker();
  }

  onMounted(() => {
    if(future) input.value.min = DateTime.now().toISODate();
  })
</script>