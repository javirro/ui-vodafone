import { AddDeviceForm } from "../types/types"
import { endpoints } from "./endpoints"

export const updateDevice = async (id: number, data: AddDeviceForm) => {
  if (!id) {
    throw new Error('Device ID is required')
  }
  if (!data) {
    throw new Error('Device data is required')
  }
  const unixTimestamp = Math.floor(new Date(data.lastConnection).getTime())
  const url = endpoints.updateDevice(id)
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data, lastConnection: unixTimestamp }),
  }
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error('Failed to update device')
  }

}