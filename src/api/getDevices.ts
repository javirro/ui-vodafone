import { Device } from '../types/types'
import { endpoints } from './endpoints'

export const getDevices = async (): Promise<Device[]> => {
  const url = endpoints.getDevices
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error fetching devices')
  }
  const devices = await response.json()
  return devices
}

export const getDevice = async (id: number): Promise<Device> => {
  const url = endpoints.getDevice(id)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error fetching device')
  }
  const device = await response.json()
  return device
}