const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export const endpoints = {
  getDevices: `${BASE_URL}/devices`, //GET
  getDevice: (id: number) => `${BASE_URL}/devices/${id}`, //GET
  addDevice: `${BASE_URL}/devices`, //POST
  deleteDevice: (id: number) => `${BASE_URL}/devices/${id}`, //DELETE
}
