describe('test cases for findCountedWordSpec', () => {
  let findCountedWord = require('../../lib/word_count/wordCount').findCountedWord;
  it('should return null when given an empty countedWords array', function () {
    let word = 'a';
    let countedWords = [];
    let countedWord = findCountedWord(word, countedWords);
    expect(countedWord).toBe(null);
  });
  it('should return wordCount when given a countedWords array include given word', function () {
    let word = 'a';
    let expectCountedWord = {word: 'a', count: 0};
    let countedWords = [expectCountedWord];
    let countedWord = findCountedWord(word, countedWords);
    expect(countedWord).toEqual(expectCountedWord);
  });
  it('should return null when given a countedWords array ont include given word', function () {
    let word = 'a';
    let countedWords = [{word: 'b', count: 1}];
    let countedWord = findCountedWord(word, countedWords);
    expect(countedWord).toBe(null);
  });
});