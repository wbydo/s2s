// @flow
import { formatText, trimAndFormatPath } from '../'

test('trimAndFormatPath', () => {
  expect(trimAndFormatPath('/src/user/hoge/index.js')).toMatchSnapshot()
})

test('formatText when handlerType = s2s', () => {
  const inputPath = 'src/input/input.js'
  const outputPath = 'src/output/output.js'
  const result = formatText('S2S', inputPath, outputPath)
  expect(result).toMatchSnapshot()
})

test('formatText when handlerType = template', () => {
  const inputPath = 'src/input/input.js'
  const outputPath = 'src/output/output.js'
  const result = formatText('TEMPLATE', inputPath, outputPath)
  expect(result).toMatchSnapshot()
})