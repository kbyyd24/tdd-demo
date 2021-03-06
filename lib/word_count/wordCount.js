'use strict';

function getFileContentAsArray(filename, callback) {
  const fs = require('fs');
  fs.readFile(filename, 'utf8', (err, data) => {
    callback(data.split(' '));
  });
}

function findCountedWord(word, countedWords) {
  for (const countedWord of countedWords) {
    if (countedWord.word === word) {
      return countedWord;
    }
  }
  return null;
}

function countWord(words) {
  let countedWords = [];
  for (const word of words) {
    const countedWord = findCountedWord(word, countedWords);
    if (countedWord) {
      countedWord.count += 1;
    } else {
      countedWords.push({word: word, count: 1});
    }
  }
  return countedWords;
}

function sortCountedWordsByCount(countedWords) {
  return countedWords.sort((previous, next) => next.count - previous.count);
}

function countAndSortWordsFromFile(file, callback) {
  getFileContentAsArray(file, (words) => {
    const countedWords = countWord(words);
    const sortedCountedWords = sortCountedWordsByCount(countedWords);
    callback(sortedCountedWords);
  });
}

module.exports = {getFileContentAsArray, findCountedWord, countWord, sortCountedWordsByCount, countAndSortWordsFromFile};