const { Repo } = require('../repo.js')

test('Get correct full URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.url()).toBe('https://github.com/my-user/my-repo-name')
})

test('Get correct full license URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.licenseUrl()).toBe('https://github.com/my-user/my-repo-name/blob/master/LICENSE')
})
