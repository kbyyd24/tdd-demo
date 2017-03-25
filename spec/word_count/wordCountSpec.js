describe('word count', function() {
  let wordCount = require('../../lib/word_count/wordCount.js');

  it('should return empty array when given an empty array for countWord', function () {
    let countedWords = wordCount.countWord([]);
    expect(countedWords).toEqual([]);
  });
  it('should return countedWords and each count is 1 when given an array with no repeated word', function () {
    let words = ['a', 'b', 'c', 'd', 'e', 'f'];
    let countedWords = wordCount.countWord(words);
    for (let countedWord of countedWords) {
      expect(countedWord.count).toBe(1);
    }
  });
  it('should return countedWords when given an array with repeated words', function () {
    let words = [
      'a', 'a', 'a',
      'b', 'b', 'b', 'b', 'b',
      'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
      'd',
      'e', 'e',
      'f'
    ];
    let expectCountedWords = [
      {word: 'a', count: 3},
      {word: 'b', count: 5},
      {word: 'c', count: 9},
      {word: 'd', count: 1},
      {word: 'e', count: 2},
      {word: 'f', count: 1}
    ];
    let countedWords = wordCount.countWord(words);
    expect(countedWords).toEqual(expectCountedWords);
  });

  it('should return empty array when given an empty array', function () {
    let sortedCountedWords = wordCount.sortCountedWordsByCount([]);
    expect(sortedCountedWords).toEqual([]);
  });
  it('should return the same array when given an array with one countedWord', function () {
    let countedWords = [{word: 'a', count: 3}];
    let sortedCountedWords = wordCount.sortCountedWordsByCount(countedWords);
    expect(sortedCountedWords).toEqual(countedWords);
  });
  it('should return sortedCountedWord when given an array with countedWords', function () {
    let countedWords = [
      {word: 'a', count: 3},
      {word: 'b', count: 5},
      {word: 'c', count: 9},
      {word: 'd', count: 1},
      {word: 'e', count: 2},
      {word: 'f', count: 1}
    ];
    let expectSortedCountedWords = [
      {word: 'c', count: 9},
      {word: 'b', count: 5},
      {word: 'a', count: 3},
      {word: 'e', count: 2},
      {word: 'd', count: 1},
      {word: 'f', count: 1}
    ];
    let sortedCountedWords = wordCount.sortCountedWordsByCount(countedWords);
    expect(sortedCountedWords).toEqual(expectSortedCountedWords);
  });

  it('should return empty array when given a file with no content', function () {
    wordCount.countAndSortWordsFromFile('emptyFile', (sortedCountedWords) => {
      expect(sortedCountedWords).toEqual([]);
    });
  });
  it('should return an array with one sortedCountedWord when given a file with one word', function () {
    wordCount.countAndSortWordsFromFile('oneWordFile', (sortedCountedWord) => {
      expect(sortedCountedWord).toEqual([{word: 'a', count: 1}]);
    });
  });
  it('should return an array with sortedCountedWords when given a file with words', function () {
    let expectSortedCountedWords = [
      {word: 'c', count: 9},
      {word: 'b', count: 5},
      {word: 'a', count: 3},
      {word: 'e', count: 2},
      {word: 'd', count: 1},
      {word: 'f', count: 1}
    ];
    wordCount.countAndSortWordsFromFile('wordsFile', (sortedCountedWords) => {
      expect(sortedCountedWords).toEqual(expectSortedCountedWords);
    });
  });
});