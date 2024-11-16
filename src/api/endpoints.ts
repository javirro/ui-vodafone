const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export const endpoints = {
  getDevices: `${BASE_URL}/devices`, //GET
  getDevice: (id: number) => `${BASE_URL}/devices/${id}`, //GET
  getDevicesPaginated: (page: number, limit: number) => `${BASE_URL}/devices/paginated/${limit}/${page}`, //GET
  addDevice: `${BASE_URL}/devices`, //POST
  updateDevice: (id: number) => `${BASE_URL}/devices/${id}`, //PUT
  deleteDevice: (id: number) => `${BASE_URL}/devices/${id}`, //DELETE
}
