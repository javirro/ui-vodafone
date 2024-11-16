import { useGetTotalDevices } from '../../../hooks/useGetData'
import { images } from '../../../images/general'
import './PageSelector.css'

interface PageSelectorProps {
  page: number
  setPage: (page: number) => void
  limit: number
}

const PageSelector = ({ page, setPage, limit }: PageSelectorProps) => {
  const { totalDevices } = useGetTotalDevices()

  if (!totalDevices) {
    return null
  }
  const totalPages = Math.ceil(totalDevices / limit)

  const handlePage = (move: 'left' | 'right') => {
    if (move === 'left' && page > 1) {
      setPage(page - 1)
    } else if (move === 'right' && page < totalPages) {
      setPage(page + 1)
    }
  }
  return (
    <div id="page-selector">
      <img src={images.leftArrow} alt="left arrow" onClick={() => handlePage('left')} />
      <span>
        {page} of {totalPages}
      </span>
      <img src={images.rightArrow} alt="right arrow" onClick={() => handlePage('right')} />
    </div>
  )
}

export default PageSelector
