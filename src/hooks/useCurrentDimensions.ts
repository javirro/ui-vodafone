import { useEffect, useState } from 'react'

export const MOBILE_WIDTH = 768

const useCurrentDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function updateResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', updateResize)

    return () => {
      window.removeEventListener('resize', updateResize)
    }
  }, [dimensions])
  return dimensions
}

export default useCurrentDimensions
