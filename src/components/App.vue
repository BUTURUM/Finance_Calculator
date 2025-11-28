<script setup>
  import { reactive, ref } from 'vue';
  
  import Bills from './Bills.vue';
  import Blob from './Blob.vue';
  import AddBill from './AddBill.vue';
  import Summary from './Summary.vue';

  const open = ref(false);
  const bills = reactive({
    list: [], increment: 0
  });

  function newBill(bill){
    bills.list.push({ ...bill, id: bills.increment++, payed: false});
  }
  function deleteBill(targetId){
    bills.list = bills.list.filter(({id}) => id != targetId);
  }
</script>
<template>
  <Summary :bills="bills.list"/>
  <Bills :bills="bills.list" @delete-bill="deleteBill"/>
  <AddBill v-model="open" @new-bill="newBill"/>

  <Blob @click="open = true"/>
</template>