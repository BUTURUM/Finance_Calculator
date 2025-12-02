import { computed, watch } from "vue";

export default function(key, reference, { read, write }){
  let data = localStorage.getItem(key);
  if(data){
    Object.assign(reference, read(JSON.parse(data)));
  }

  const plain = computed(() => write(reference));
  watch(plain, (v) => {
    localStorage.setItem(key, JSON.stringify(v));
  }, {
    deep: true, immediate: true
  });
}