describe('test cases for findCountedWordSpec', () => {
  const findCountedWord = require('../../lib/word_count/wordCount').findCountedWord;
  it('should return null when given an empty countedWords array', function () {
    const word = 'a';
    const countedWords = [];
    const countedWord = findCountedWord(word, countedWords);
    expect(countedWord).toBe(null);
  });
  it('should return wordCount when given a countedWords array include given word', function () {
    const word = 'a';
    const expectCountedWord = {word: 'a', count: 0};
    const countedWords = [expectCountedWord];
    const countedWord = findCountedWord(word, countedWords);
    expect(countedWord).toEqual(expectCountedWord);
  });
  it('should return null when given a countedWords array ont include given word', function () {
    const word = 'a';
    const countedWords = [{word: 'b', count: 1}];
    const countedWord = findCountedWord(word, countedWords);
    expect(countedWord).toBe(null);
  });
});