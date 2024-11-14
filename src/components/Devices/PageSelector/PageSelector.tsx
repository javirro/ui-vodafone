import { images } from '../../../images/general'
import './PageSelector.css'

interface PageSelectorProps {
  page: number
  setPage: (page: number) => void
}

const PageSelector = ({ page, setPage }: PageSelectorProps) => {
  const totalPages = 10
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
