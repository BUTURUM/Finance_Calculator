<template>
  <div class="box">
    <table v-if="bills.length" class="w-full border-separate border-spacing-2.5">
      <colgroup>
        <col />
        <col width="50%"/>
        <col width="20%"/>
        <col width="30%"/>
        <col />
      </colgroup>
      <thead>
        <tr class="text-low [&>th]:font-normal">
          <td></td>
          <th>title</th>
          <th>amount</th>
          <th>due</th>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bill in bills" :key="bill.id" class="text-high">
          <td>
            <Checkbox v-model="bill.payed"/>
          </td>
          <td>{{ bill.title }}</td>
          <td class="text-center">{{ bill.amount.toFixed(2) }}</td>
          <td class="text-center">{{ bill.due.toFormat('dd.LL.yyyy') }}</td>
          <td>
            <button @click="$emit('delete-bill', bill.id)" class="align-middle">
              <Close class="size-6 fill-outline"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="flex justify-center items-center h-24">
      <div class="text-low">You have no bills to pay</div>
    </div>
  </div>
</template>
<script setup>
  import Checkbox from '../utils/Checkbox.vue';
  import Close from '../assets/close.svg?component';

  const { bills } = defineProps(['bills']);
  defineEmits(['delete-bill']);
</script>