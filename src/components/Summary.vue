<template>
  <div class="primary box">
    <div class="relative font-bold text-2xl text-center">
      <span class="absolute left-0">£</span>{{ amount.toFixed(2) }}
    </div>
    <div class="flex justify-end items-center gap-2">
      to pay by: <DateInput v-model="period" class="on-primary"/>
    </div>
  </div>
</template>
<script setup>
  import { computed, markRaw, ref } from 'vue';
  import { DateTime } from 'luxon';
  
  import DateInput from '../utils/DateInput.vue';

  const { bills } = defineProps(['bills']);
  const period = ref(markRaw(DateTime.now().startOf('day')));

  const amount = computed(() => bills.reduce((total, { amount, due, payed }) => {
    return period.value >= due && !payed ? total + amount : total
  }, 0));
</script>