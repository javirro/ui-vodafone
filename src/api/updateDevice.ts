import { AddDeviceForm } from "../types/types"
import { endpoints } from "./endpoints"

export const updateDevice = async (id: number, data: AddDeviceForm) => {
  const url = endpoints.updateDevice(id)
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Failed to update device')
  }

}