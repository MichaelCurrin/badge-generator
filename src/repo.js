class Repo {
  constructor(username, repoName) {
    this.username = username
    this.repoName = repoName
  }

  url() {
    return `https://github.com/${this.username}/${this.repoName}`
  }

  licenseUrl() {
    return `${this.url()}/blob/master/LICENSE`
  }
}


module.exports = {
  Repo
}