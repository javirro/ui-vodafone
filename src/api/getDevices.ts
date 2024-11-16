import { Device } from '../types/types'
import { endpoints } from './endpoints'

export const getDevices = async (): Promise<Device[]> => {
  const url = endpoints.getDevices
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error fetching devices')
  }
  const data = await response.json()
  return data.devices
}

export const getDevice = async (id: number): Promise<Device> => {
  const url = endpoints.getDevice(id)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error fetching device')
  }
  const data = await response.json()
  return data.device
}