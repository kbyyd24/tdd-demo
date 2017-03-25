'use strict'

function getFileContentAsArray(filename, callback) {
  let fs = require('fs')
  fs.readFile(filename, 'utf8', (err, data) => {
    callback(data.split(' '))
  })
}

function findCountedWord(word, countedWords) {
  for (let countedWord of countedWords) {
    if (countedWord.word === word) {
      return countedWord
    }
  }
  return null
}

function countWord(words) {
  return []
}

module.exports = {getFileContentAsArray, findCountedWord, countWord}