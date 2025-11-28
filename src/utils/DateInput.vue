<template>
  <div
    @click="use"
    class="rounded-sm bg-box p-1.5 inline-block"
    :class="[date ? 'text-high' : 'text-low']"
    v-bind="$attrs"
  >
    {{ display }}
  </div>
  <input class="hidden" @change="update" type="date" ref="input">
</template>
<script setup>
  import { DateTime } from 'luxon';
  import { computed, markRaw, onMounted, useTemplateRef } from 'vue';

  defineOptions({ inheritAttrs: false });

  const input = useTemplateRef('input');
  const date = defineModel();
  const display = computed(() => {
    if(date.value){
      return date.value.toFormat('dd.LL.yyyy')
    } else{
      return 'dd.mm.yyyy'
    }
  });

  function update(event){
    date.value = markRaw(DateTime.fromJSDate(event.target.valueAsDate));
  }

  function use(){
    input.value.showPicker();
  }

  onMounted(() => {
    const today = DateTime.now().toFormat('yyyy-LL-dd');

    input.value.min = today;
    input.value.value = today;
  });
</script>