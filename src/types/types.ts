export type Device = {
  id: number
  name: string
  phone: string
  lastConnection: number
  lat: number
  lon: number
}

export type AddDeviceForm = Omit<Device, 'id' | 'lastConnection'> & { lastConnection: Date }
