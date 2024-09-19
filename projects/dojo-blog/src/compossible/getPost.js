import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts/' + id)
      if (!response.ok) {
        throw new Error('No post available')
      }
      post.value = await response.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { load, post, error }
}

export default getPost
