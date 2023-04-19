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

async function getWarehouse(id) {
  try {
    const response = await axios.get(`${routes.warehouse}/${id}`);
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

async function createWarehouse(data) {
  try {
    const response = await axios.post(routes.warehouse, data);
    if (response.status === 201) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export { getWarehouses, getWarehouse, createWarehouse }
