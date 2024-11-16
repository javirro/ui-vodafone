import { useState, useEffect } from "react"

const useErrorLoading = (timeout: number) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false)
    }, timeout)

    return () => clearTimeout(timer)
  }, [timeout])

  return { loading, error, setLoading, setError }
}

export default useErrorLoading