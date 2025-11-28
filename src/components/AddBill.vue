<template>
  <Model v-model="open">
    <form @submit.prevent="submit" class="*:not-last:mb-2.5">
      <input
        class="standard-input w-full"
        v-model="data.title"
        placeholder="title"
        type="text"
      />
      <input
        class="standard-input w-full"
        v-model="data.amount"
        placeholder="amount"
        step="0.01"
        type="number"
      />
      <div class="flex gap-2 items-center">
        <div class="text-low">to be paid by:</div>
        <DateInput class="on-secondary flex-auto" v-model="data.due" future/>
      </div>
      <div class="flex">
        <button @click="close" type="button" class="passive-btn flex-auto">close</button>
        <button type="submit" class="active-btn flex-auto">add</button>
      </div>
    </form>
  </Model>
</template>
<script setup>
  import { markRaw, reactive, readonly, toRaw, watch } from 'vue';
  import { DateTime } from 'luxon';

  import Model from '../utils/Model.vue';
  import DateInput from '../utils/DateInput.vue';

  const open = defineModel();
  const emit = defineEmits(['new-bill']);

  const original = Object.freeze({
    title: undefined, amount: undefined, due: markRaw(DateTime.now())
  });
  const data = reactive(Object.assign({}, original));

  function close(){
    open.value = false;
  }

  function submit(){
    if(!data.title || !data.amount || !data.due){
      return
    }
    emit('new-bill', toRaw(data));
    close();
  }

  watch(open, (value) => {
    if(!value) Object.assign(data, original);
  });
</script>