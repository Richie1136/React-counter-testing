import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'

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