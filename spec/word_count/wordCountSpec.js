describe('word count', function() {
  let getFileContentAsArray = require('../../lib/word_count/wordCount.js')
  it('should return empty array when given a file name which content is empty', function() {
    let emptyFilName = 'emptyFile'
    getFileContentAsArray(emptyFilName, words => {
      expect(words).toEqual([])
    })
  })
  it('should return an array with one word when given a file name which content has only one word', function () {
    let oneWordFileName = 'oneWordFile'
    getFileContentAsArray(oneWordFileName, words => {
      expect(words).toEqual(['one'])
    })
  })
  it('should return an array with words when given a file name which content has words', function () {
    let wordsFile = 'wordsFile'
    getFileContentAsArray(wordsFile, words => {
      expect(words).toEqual([
        'a', 'a', 'a',
        'b', 'b', 'b', 'b', 'b',
        'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
        'd',
        'e', 'e',
        'f'
      ])
    })
  })
  it('should return null when given an empty countedWords array', function () {
    let word = 'a';
    let countedWords = [];
    let countedWord = findCountedWord(word, countedWords)
    expect(countedWord).toBe(null)
  })
})