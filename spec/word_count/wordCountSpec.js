describe('word count', function() {
  let getFileContentAsArray = require('../../lib/word_count/wordCount.js')
  it('should return empty array when given a file name which content is empty', function() {
    let emptyFilName = 'emptyFile'
    let words = getFileContentAsArray()
    expect(words).toEqual([])
  })
})