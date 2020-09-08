const { parseRepoUrl, Repo } = require('../components/repo.js')

test("A repo URL can be split correctly", () => {
  var url = 'https://github.com/my-username/my-repo-name'

  expect(parseRepoUrl(url)).toBe({
    username: 'my-username',
    repoName: 'my-repo-name'
  })
})

test("Create a repo instance", () => {
  var repo = new Repo('my-username', 'my-repo-name')

  expect(repo.username).toBe('my-username')
  expect(repo.repoName).toBe('my-repo-name')
})

test("Create a repo instance by key-value pairs", () => {
  var repo = new Repo({ username: 'my-username', repoName: 'my-repo-name' })

  expect(repo.username).toBe('my-username')
  expect(repo.repoName).toBe('my-repo-name')
})

test('Get Github URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.githubUrl()).toBe('https://github.com/my-user/my-repo-name')
})

test('Get repo-based Github Pages URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.githubPagesUrl()).toBe('https://my-user.github.io/my-repo-name')
})

test('Get user-based Github Pages URL for a repo', () => {
  var repo = new Repo('my-user')

  expect(repo.githubPagesUrl()).toBe('https://my-user.github.io/')
})

test('Get correct full license URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.licenseUrl()).toBe('https://github.com/my-user/my-repo-name/blob/master/LICENSE')
})

test('Get generate template URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.template()).toBe('https://github.com/my-user/my-repo-name/template')
})

test('Get tags URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.tags()).toBe('https://github.com/my-user/my-repo-name/tags')
})

test('Get releases URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.releases()).toBe('https://github.com/my-user/my-repo-name/releases')
})

test('Get forks URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.forks()).toBe('https://github.com/my-user/my-repo-name/network/members')
})

test('Get stars URL for a repo', () => {
  var repo = new Repo('my-user', 'my-repo-name')

  expect(repo.stars()).toBe('https://github.com/my-user/my-repo-name/stargazers')
})
