import { render, screen } from '@testing-library/react'
import Counter from './Counter'

test('header renders with correct test', () => {
  render(<Counter />)
  const head = screen.getByRole('heading')
  expect(head.textContent).toBe("Counter")
})