import { useQuery } from '@tanstack/react-query'
import { getDevice, getDevices } from '../api/getDevices'
import { Device } from '../types/types'

export const useGetDevices = () => {
  const {
    data: devices,
    isLoading,
    isError,
    refetch,
  } = useQuery<Device[]>({
    queryKey: ['devices'],
    queryFn: async () => await getDevices(),
  })

  return { devices, isLoading, isError, refetch }
}

export const useGetDevice = (id: number) => {
  const {
    data: device,
    isLoading,
    isError,
    refetch,
  } = useQuery<Device>({
    queryKey: ['device', id],
    queryFn: async () => await getDevice(id),
  })

  return { device, isLoading, isError, refetch }
}

