describe('test cases for countWord', () => {
  let countWord = require('../../lib/word_count/wordCount').countWord;
  it('should return empty array when given an empty array for countWord', function () {
    let countedWords = countWord([]);
    expect(countedWords).toEqual([]);
  });
  it('should return countedWords and each count is 1 when given an array with no repeated word', function () {
    let words = ['a', 'b', 'c', 'd', 'e', 'f'];
    let countedWords = countWord(words);
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
    let countedWords = countWord(words);
    expect(countedWords).toEqual(expectCountedWords);
  });
});