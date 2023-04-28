import axios from '@services/axios'
import routes from '@services/routes.json'

export async function getWarehouses() {
  try {
    const response = await axios.get(routes.warehouse)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getWarehouse(id) {
  try {
    const response = await axios.get(`${routes.warehouse}/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function createWarehouse(data) {
  try {
    const response = await axios.post(routes.warehouse, data)
    if (response.status === 201) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function editWarehouse(id, data) {
  try {
    const response = await axios.put(`${routes.warehouse}/${id}`, data)
    if (response.status === 200) {
      return response
    }
  } catch (error) {
    console.log(error)
  }
}

export async function deleteWarehouse(id) {
  try {
    const response = await axios.delete(`${routes.warehouse}/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getInventory() {
  try {
    const response = await axios.get(routes.inventory)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getInventoryItem(id) {
  try {
    const response = await axios.get(`${routes.inventory}/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function createInventoryItem(data) {
  try {
    const response = await axios.post(routes.inventory, data)
    if (response.status === 201) {
      return response
    }
  } catch (error) {
    console.log(error)
  }
}

export async function editInventoryItem(id, data) {
  try {
    const response = await axios.put(`${routes.inventory}/${id}`, data)
    if (response.status === 200) {
      return response
    }
  } catch (error) {
    console.log(error)
  }
}

export async function deleteInventoryItem(id) {
  try {
    const response = await axios.delete(`${routes.inventory}/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getCategoryNames() {
  try {
    const inventoryData = await getInventory()
    const allCategories = inventoryData.map((item) => item.category)

    return [...new Set(allCategories)]

  } catch (error) {
    console.log(error)
  }
}

export async function getWarehouseNames() {
  try {
    const warehouseData = await getWarehouses()
    const allWarehouses = warehouseData.map((warehouse) => {

      return {
        id: warehouse.id,
        warehouseName: warehouse.warehouse_name,
      }
    })

    return [...new Set(allWarehouses)]

  } catch (error) {
    console.log(error)
  }
}

export async function getInventoryItemsByWarehouse(id) {
  try {
    const response = await axios.get(`${routes.warehouse}/${id}/inventory`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export const { format } = new Intl.NumberFormat('en-US')
