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
})