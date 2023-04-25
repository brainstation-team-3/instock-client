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

async function editWarehouse(id, data) {
  try {
    const response = await axios.put(`${routes.warehouse}/${id}`, data);
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

async function deleteWarehouse(id) {
  try {
    const response = await axios.delete(`${routes.warehouse}/${id}`);
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

async function getInventory() {
  try {
    const response = await axios.get(routes.inventory);
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

async function createInventoryItem(data) {
  try {
    const response = await axios.post(routes.inventory, data);
    if (response.status === 201) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

async function fetchData() {
  try {
    const inventoryData = await getInventory();
    const allCategories = new Set(
      inventoryData.map((item) => {
        return item.category;
      })
    );
    setCategoryList([...allCategories]);

    const warehouseData = await getWarehouses();
    const allWarehouses = new Set(
      warehouseData.map((item) => {
        return item.warehouse;
      })
    );
    setWarehouseList([...allWarehouses]);
  } catch (error) {
    console.log(error)
  }
}

export { getWarehouses, getWarehouse, createWarehouse, editWarehouse, deleteWarehouse, getInventory, createInventoryItem, fetchData }
