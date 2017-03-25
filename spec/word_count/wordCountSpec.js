describe('word count', function() {

  it('should return empty array when given a file name which content is empty', function() {
    let emptyFilName = 'emptyFile'
    let words = getFileContentAsArray()
    expect(words).toEqual([])
  })
})