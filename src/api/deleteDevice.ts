import { endpoints } from './endpoints'

export const deleteDevice = async (id: number) => {
  const url = endpoints.deleteDevice(id)
  const options = {
    method: 'DELETE',
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Error deleting device')
  }
}
