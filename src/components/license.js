class License {
  DOMAIN = 'https://img.shields.io'
  REL_TARGET = '#license'
  DEFAULT_COLOR = 'blue'

  constructor(type, target = null, color = null) {
    this.type = type

    this.target = target || this.REL_TARGET
    this.color = color || this.DEFAULT_COLOR
  }

  title() {
    return `License: ${this.type}`
  }

  img() {
    return `${this.DOMAIN}/badge/License-${this.type}-${this.color}`
  }

  fileUrl() {
    return ``
  }

  markdown() {
    return `[![${this.title()}](${this.img()})](${this.target})`
  }
}

module.exports = {
  License,
}