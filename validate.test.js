const validate = require('./validate')

it('returns false with empty string', () => {
  const result = validate('')
  expect(result).toBe(false)
})

it('returns false with a text length over 30 characters', () => {
  const result = validate('qqqqqwwwwweeeeerrrrrtttttyyyyyy')
  expect(result).toBe(false)
})

it('returns false with a text length less than or equal 10 characters', () => {
  const result = validate('qwertyzx')
  expect(result).toBe(false)
})

it('returns true with a text inclues -s characters', () => {
  const result = validate('some-string')
  expect(result).toBe(true)
})

it('returns true with a text inclues -s characters and ignore case', () => {
  const result = validate('SOME-STRING')
  expect(result).toBe(true)
})
