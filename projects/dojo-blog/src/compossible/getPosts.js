import { ref } from 'vue'
const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  const load = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts')
      if (!response.ok) {
        throw new Error('No data available')
      }
      posts.value = await response.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { load, posts, error }
}
export default getPosts
