<script setup>
  import { reactive, ref } from 'vue';
  
  import Bills from './Bills.vue';
  import Blob from './Blob.vue';
  import AddBill from './AddBill.vue';

  const open = ref(false);
  const bills = reactive([]);

  function newBill(bill){
    bills.push({ ...bill, due: "15.11.2025", payed: false});
  }
</script>
<template>
  <Bills :bills="bills"/>
  <Blob @click="open = true"/>
  <AddBill v-model="open" @new-bill="newBill"/>
</template>