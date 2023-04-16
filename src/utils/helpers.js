import axios from '@services/axios'
import routes from '@services/routes.json'


async function getWarehouses() {
  try {
    const response = await axios.get(routes.warehouse);
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}



export { getWarehouses }