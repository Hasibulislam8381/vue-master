import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const increament = () => count.value++
  const decreament = () => count.value--

  return { count, increament, decreament }
}
