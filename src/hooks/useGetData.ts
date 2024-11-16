import { useQuery } from '@tanstack/react-query'
import { getDevices } from '../api/getDevices'
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

