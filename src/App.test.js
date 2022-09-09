import { render, screen } from '@testing-library/react';
import App from './App';
import {axe, toHaveNoViolations} from "jest-axe"

expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage with react', async () => {
  render(<App/>, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})
