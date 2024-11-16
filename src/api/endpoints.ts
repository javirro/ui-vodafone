const BASE_URL = process.env.REACT_APP_API_URL;

export const endpoints = {
  addDevice: `${BASE_URL}/devices`, //POST
  deleteDevice: (id: number) => `${BASE_URL}/devices/${id}`, //DELETE
}