import { AddDeviceForm } from '../types/types'
import { endpoints } from './endpoints'

export const addDevice = async (data: AddDeviceForm) => {
  const unixTimestamp = Math.floor(data.lastConnection.getTime() / 1000)
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data, lastConnection: unixTimestamp }),
  }
  const response = await fetch(endpoints.addDevice, options)
  if (!response.ok) {
    throw new Error('An error occurred while adding the device')
  }
}
