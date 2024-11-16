import { render, screen, fireEvent } from '@testing-library/react'
import * as hooks from '../hooks/useGetData'
import PageSelector from '../components/Devices/PageSelector/PageSelector'

jest.mock('../hooks/useGetData.ts', () => ({
  useGetTotalDevices: jest.fn(),
}))

describe('PageSelector Component included in Devices Table', () => {
  const setPageMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks() // Clear mock calls between tests
  })

  test('Renders component after loading total devices data', () => {
    jest.spyOn(hooks, 'useGetTotalDevices').mockReturnValue({ totalDevices: 50, isLoading: false })

    render(<PageSelector page={1} setPage={setPageMock} limit={10} />)

    const leftArrow = screen.getByAltText('left arrow')
    const rightArrow = screen.getByAltText('right arrow')
    const paginationText = screen.getByText('1 of 5')

    expect(leftArrow).toBeInTheDocument()
    expect(rightArrow).toBeInTheDocument()
    expect(paginationText).toBeInTheDocument()
  })

  test('Renders null value while total devices is loading', () => {
    jest.spyOn(hooks, 'useGetTotalDevices').mockReturnValue({ totalDevices: undefined, isLoading: false })
    const { container } = render(<PageSelector page={1} setPage={setPageMock} limit={10} />)
    expect(container).toBeEmptyDOMElement()
  })

  test('Click event on left arrow decreases the page number', () => {
    jest.spyOn(hooks, 'useGetTotalDevices').mockReturnValue({ totalDevices: 50, isLoading: false })
    const initialPage = 3
    render(<PageSelector page={initialPage} setPage={setPageMock} limit={10} />)

    const leftArrow = screen.getByAltText('left arrow')
    fireEvent.click(leftArrow)
    const resPage = initialPage - 1
    expect(setPageMock).toHaveBeenCalledWith(resPage)
  })

  test('Click event on right arrow increases the page number', () => {
    jest.spyOn(hooks, 'useGetTotalDevices').mockReturnValue({ totalDevices: 50, isLoading: false })
    const initialPage = 3
    render(<PageSelector page={initialPage} setPage={setPageMock} limit={10} />)

    const rightArrow = screen.getByAltText('right arrow')
    fireEvent.click(rightArrow)

    const resPage = initialPage + 1
    expect(setPageMock).toHaveBeenCalledWith(resPage)
  })

  test('Left arrow does not decrease the page number below 1', () => {
    jest.spyOn(hooks, 'useGetTotalDevices').mockReturnValue({ totalDevices: 50, isLoading: false })
    const initialPage = 1
    render(<PageSelector page={initialPage} setPage={setPageMock} limit={10} />)

    const leftArrow = screen.getByAltText('left arrow')
    fireEvent.click(leftArrow)

    expect(setPageMock).not.toHaveBeenCalled()
  })

  test('Right arrow does not increase the page number above totalPages', () => {
    jest.spyOn(hooks, 'useGetTotalDevices').mockReturnValue({ totalDevices: 50, isLoading: false })
    const initialPage = 5
    render(<PageSelector page={initialPage} setPage={setPageMock} limit={10} />)

    const rightArrow = screen.getByAltText('right arrow')
    fireEvent.click(rightArrow)

    expect(setPageMock).not.toHaveBeenCalled()
  })

  test('Correctly calculates the total pages when is exact division between pages and limit', () => {
    jest.spyOn(hooks, 'useGetTotalDevices').mockReturnValue({ totalDevices: 60, isLoading: false })
    render(<PageSelector page={1} setPage={setPageMock} limit={30} />)

    const paginationText = screen.getByText('1 of 2')
    expect(paginationText).toBeInTheDocument()
  })

  test('Correctly calculates the total pages when is not exact division between pages and limit', () => {
    jest.spyOn(hooks, 'useGetTotalDevices').mockReturnValue({ totalDevices: 50, isLoading: false })
    render(<PageSelector page={1} setPage={setPageMock} limit={20} />)

    const paginationText = screen.getByText('1 of 3')
    expect(paginationText).toBeInTheDocument()
  })
})
