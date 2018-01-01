import plugin from '../src'
import { transform } from 'babel-core'

test('babel plugin test', () => {
  const example = `
    foo === bar
  `

  const { code } = transform(example, { plugins: [plugin] })
  expect(code.trim()).toBe('aaa === bbb;')
})
