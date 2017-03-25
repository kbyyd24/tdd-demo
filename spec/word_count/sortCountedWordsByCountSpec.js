describe('test cases for sortCountedWord', () => {
  const sortCountedWordsByCount = require('../../lib/word_count/wordCount').sortCountedWordsByCount;
  it('should return empty array when given an empty array', () => {
    const sortedCountedWords = sortCountedWordsByCount([]);
    expect(sortedCountedWords).toEqual([]);
  });
  it('should return the same array when given an array with one countedWord', () => {
    const countedWords = [{word: 'a', count: 3}];
    const sortedCountedWords = sortCountedWordsByCount(countedWords);
    expect(sortedCountedWords).toEqual(countedWords);
  });
  it('should return sortedCountedWord when given an array with countedWords', () => {
    const countedWords = [
      {word: 'a', count: 3},
      {word: 'b', count: 5},
      {word: 'c', count: 9},
      {word: 'd', count: 1},
      {word: 'e', count: 2},
      {word: 'f', count: 1}
    ];
    const expectSortedCountedWords = [
      {word: 'c', count: 9},
      {word: 'b', count: 5},
      {word: 'a', count: 3},
      {word: 'e', count: 2},
      {word: 'd', count: 1},
      {word: 'f', count: 1}
    ];
    const sortedCountedWords = sortCountedWordsByCount(countedWords);
    expect(sortedCountedWords).toEqual(expectSortedCountedWords);
  });
});