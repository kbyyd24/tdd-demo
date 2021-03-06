describe('test cases for countWord', () => {
  const countWord = require('../../lib/word_count/wordCount').countWord;
  it('should return empty array when given an empty array for countWord', () =>{
    const countedWords = countWord([]);
    expect(countedWords).toEqual([]);
  });
  it('should return countedWords and each count is 1 when given an array with no repeated word', () => {
    const words = ['a', 'b', 'c', 'd', 'e', 'f'];
    const countedWords = countWord(words);
    for (const countedWord of countedWords) {
      expect(countedWord.count).toBe(1);
    }
  });
  it('should return countedWords when given an array with repeated words', () => {
    const words = [
      'a', 'a', 'a',
      'b', 'b', 'b', 'b', 'b',
      'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
      'd',
      'e', 'e',
      'f'
    ];
    const expectCountedWords = [
      {word: 'a', count: 3},
      {word: 'b', count: 5},
      {word: 'c', count: 9},
      {word: 'd', count: 1},
      {word: 'e', count: 2},
      {word: 'f', count: 1}
    ];
    const countedWords = countWord(words);
    expect(countedWords).toEqual(expectCountedWords);
  });
});