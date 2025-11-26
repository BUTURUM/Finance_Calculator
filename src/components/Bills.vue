<template>
  <div class="box">
    <table class="w-full border-separate border-spacing-2.5">
      <colgroup>
        <col />
        <col width="50%"/>
        <col width="20%"/>
        <col width="30%"/>
      </colgroup>
      <thead>
        <tr class="text-on-secondary-low [&>th]:font-normal">
          <td></td>
          <th>title</th>
          <th>amount</th>
          <th>due</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bill in bills" class="text-on-secondary">
          <td>
            <Checkbox v-model="bill.payed"/>
          </td>
          <td>{{ bill.title }}</td>
          <td class="text-center">{{ bill.amount.toFixed(2) }}</td>
          <td class="text-center">{{ bill.due }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
  import { reactive } from 'vue';
  import Checkbox from './Checkbox.vue';

  const bills = reactive([
    {
      title: "Electricity",
      amount: 92.50,
      due: "15.11.2025",
      payed: false
    },
    {
      title: "Water",
      amount: 45.20,
      due: "20.11.2025",
      payed: false
    },
    {
      title: "Internet",
      amount: 59.99,
      due: "01.12.2025",
      payed: false
    },
    {
      title: "Rent",
      amount: 1200,
      due: "05.12.2025",
      payed: false
    },
    {
      title: "Phone",
      amount: 38.75,
      due: "10.12.2025",
      payed: false
    }
  ])
</script>