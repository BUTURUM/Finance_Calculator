<script setup>
  import { reactive, ref } from 'vue';
  
  import Bills from './Bills.vue';
  import Blob from './Blob.vue';
  import AddBill from './AddBill.vue';
  import Summary from './Summary.vue';

  const open = ref(false);
  const bills = reactive([]);

  function newBill(bill){
    bills.push({ ...bill, payed: false});
  }
</script>
<template>
  <Summary :bills="bills"/>
  <Bills :bills="bills"/>
  <Blob @click="open = true"/>
  <AddBill v-model="open" @new-bill="newBill"/>
</template>