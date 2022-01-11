import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'

describe('Counter Component', () => {
  test('header renders with correct test', () => {
    render(<Counter />)
    const head = screen.getByRole('heading', { name: /Counter/i })
    expect(head).toBeInTheDocument()
  })

  test('counter initally starts with text of 0', () => {
    render(<Counter />)
    const count = screen.getByTestId('counter')
    expect(count.textContent).toEqual("0")
  })

  test('input contains iitial value of one', () => {
    render(<Counter />)
    const input = screen.getByTestId('input')
    expect(input.value).toBe("1")
  })

  test('add button renders with +', () => {
    render(<Counter />)
    const btn = screen.getByTestId('add-button', { name: /add button/i })
    expect(btn.textContent).toBe("+")
  })

  test('subtract button renders with -', () => {
    render(<Counter />)
    const btn = screen.getByTestId('subtract-button', { name: /subtract button/i })
    expect(btn.textContent).toBe("-")
  })

  test('changing value of input works correctly', () => {
    render(<Counter />)
    const inputEle = screen.getByTestId('input')
    expect(inputEle.value).toBe('1')
    fireEvent.change(inputEle, {
      target: {
        value: '5'
      }
    })
    expect(inputEle.value).toBe('5')
  })

  test('Click on + button adds 1 to counter', () => {
    render(<Counter />)
    const btnElement = screen.getByTestId('add-button')
    const counterEle = screen.getByTestId('counter')
    userEvent.click(btnElement)
    expect(counterEle.textContent).toBe('1')
  })

  test('Click on - button minus 1 from counter', () => {
    render(<Counter />)
    const btnElement = screen.getByTestId('subtract-button')
    const counterEle = screen.getByTestId('counter')
    userEvent.click(btnElement)
    expect(counterEle.textContent).toBe('-1')
  })

  test('Changing input value then clicking on + button works correctly', () => {
    render(<Counter />)
    const btnElement = screen.getByTestId('add-button')
    const counterEle = screen.getByTestId('counter')
    const inputEl = screen.getByTestId('input')
    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    })
    userEvent.click(btnElement)
    expect(counterEle.textContent).toBe('5')
  })

  test('Changing input value then clicking on - button works correctly', () => {
    render(<Counter />)
    const btnElement = screen.getByTestId('subtract-button')
    const counterEle = screen.getByTestId('counter')
    const inputEl = screen.getByTestId('input')
    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    })
    userEvent.click(btnElement)
    expect(counterEle.textContent).toBe('-5')
  })

  test('Adding and then subtracting leads to the correct counter number', () => {
    render(<Counter />)
    const btnElement = screen.getByTestId('subtract-button')
    const addBtnElement = screen.getByTestId('add-button')
    const counterEle = screen.getByTestId('counter')
    const inputEl = screen.getByTestId('input')
    fireEvent.change(inputEl, {
      target: {
        value: '10'
      }
    })
    userEvent.click(addBtnElement)
    userEvent.click(addBtnElement)
    userEvent.click(addBtnElement)
    userEvent.click(addBtnElement)
    userEvent.click(btnElement)
    userEvent.click(btnElement)
    expect(counterEle.textContent).toBe('20')
    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    })
    userEvent.click(addBtnElement)
    userEvent.click(addBtnElement)
    userEvent.click(addBtnElement)
    userEvent.click(addBtnElement)
    userEvent.click(btnElement)
    userEvent.click(btnElement)
    expect(counterEle.textContent).toBe('30')
  })
  test('counter contains correct className', () => {
    render(<Counter />)
    const counterEle = screen.getByTestId('counter')
    const btnElement = screen.getByTestId('subtract-button')
    const addBtnElement = screen.getByTestId('add-button')
    const inputEl = screen.getByTestId('input')
    expect(counterEle.className).toBe("")
    fireEvent.change(inputEl, {
      target: {
        value: '50'
      }
    })
    userEvent.click(addBtnElement)
    expect(counterEle.className).toBe("")
    userEvent.click(addBtnElement)
    expect(counterEle.className).toBe("green")
    userEvent.click(addBtnElement)
    expect(counterEle.className).toBe("green")
    userEvent.click(btnElement)
    userEvent.click(btnElement)
    expect(counterEle.className).toBe("")
    userEvent.click(btnElement)
    userEvent.click(btnElement)
    userEvent.click(btnElement)
    userEvent.click(btnElement)
    expect(counterEle.className).toBe("red")
  })
})