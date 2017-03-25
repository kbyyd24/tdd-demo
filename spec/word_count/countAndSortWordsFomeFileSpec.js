describe('test cases for countAndSortWordsFromFile', () => {
  const countAndSortWordsFromFile = require('../../lib/word_count/wordCount').countAndSortWordsFromFile;
  it('should return empty array when given a file with no content', () => {
    countAndSortWordsFromFile('emptyFile', (sortedCountedWords) => {
      expect(sortedCountedWords).toEqual([]);
    });
  });
  it('should return an array with one sortedCountedWord when given a file with one word', () => {
    countAndSortWordsFromFile('oneWordFile', (sortedCountedWord) => {
      expect(sortedCountedWord).toEqual([{word: 'a', count: 1}]);
    });
  });
  it('should return an array with sortedCountedWords when given a file with words', () => {
    const expectSortedCountedWords = [
      {word: 'c', count: 9},
      {word: 'b', count: 5},
      {word: 'a', count: 3},
      {word: 'e', count: 2},
      {word: 'd', count: 1},
      {word: 'f', count: 1}
    ];
    countAndSortWordsFromFile('wordsFile', (sortedCountedWords) => {
      expect(sortedCountedWords).toEqual(expectSortedCountedWords);
    });
  });
});