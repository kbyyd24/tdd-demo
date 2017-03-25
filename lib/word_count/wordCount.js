'use strict'

function getFileContentAsArray(filename, callback) {
  let fs = require('fs')
  fs.readFile(filename, 'utf8', (err, data) => {
    callback([data])
  })
}

module.exports = getFileContentAsArray