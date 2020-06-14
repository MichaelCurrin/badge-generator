const { License } = require('./license.js')

test('MIT license badge title displays correctly', () => {
  var license = new License('MIT')

  expect(license.title()).toBe('License: MIT')
})

test('MIT license badge image is correct', () => {
  var license = new License('MIT')

  expect(license.img()).toBe('https://img.shields.io/badge/License-MIT-blue')
})

test('MIT license badge relative target is correct', () => {
  var license = new License('MIT')

  expect(license.REL_TARGET).toBe('#license')
})

test('MIT license full badge with relative target displays correctly', () => {
  var license = new License('MIT')

  var badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](#license)';
  expect(license.markdown()).toBe(badge)
})

test('MIT license full badge with absolute target displays correctly', () => {
  var target = 'https://github.com/my-user/my-repo-name/blob/master/LICENSE';
  var license = new License('MIT', target)

  var badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://github.com/my-user/my-repo-name/blob/master/LICENSE)';
  expect(license.markdown()).toBe(badge)
})
