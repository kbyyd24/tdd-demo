describe('word count', function() {
  let getFileContentAsArray = require('../../lib/word_count/wordCount.js')
  it('should return empty array when given a file name which content is empty', function() {
    let emptyFilName = 'emptyFile'
    let words = getFileContentAsArray(emptyFilName)
    expect(words).toEqual([])
  })
  it('should return an array with one word when given a file name which content has only one word', function () {
    let oneWordFileName = 'oneWordFileName'
    let words = getFileContentAsArray(oneWordFileName)
    expect(words).toEqual(['one'])
  })
})