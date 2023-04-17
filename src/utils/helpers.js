import axios from '@services/axios'
import Routes from '@services/Routes'

async function fetchData() {
  try {
    const response = await axios.get(`/api/`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

async function postData() {
  try {
    const response = await axios.post(`/`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export { fetchData, postData }
