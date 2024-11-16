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

export const getDevicesPaginated = async (page: number, limit: number): Promise<Device[]> => {
  const url = endpoints.getDevicesPaginated(page, limit)
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error fetching devices')
  }
  const devices = await response.json()
  return devices
}

export const getTotal = async (): Promise<number> => {
  const url = endpoints.totalDevices
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error fetching total devices')
  }
  const total = await response.json()
  return total
}