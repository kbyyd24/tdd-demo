describe('test cases for getFileContentAsArray', () => {
  const getFileContentAsArray = require('../../lib/word_count/wordCount').getFileContentAsArray;
  it('should return empty array when given a file name which content is empty', () => {
    const emptyFilName = 'emptyFile';
    getFileContentAsArray(emptyFilName, words => {
      expect(words).toEqual([]);
    });
  });
  it('should return an array with one word when given a file name which content has only one word', function () {
    const oneWordFileName = 'oneWordFile';
    getFileContentAsArray(oneWordFileName, words => {
      expect(words).toEqual(['one']);
    });
  });
  it('should return an array with words when given a file name which content has words', function () {
    const wordsFile = 'wordsFile';
    getFileContentAsArray(wordsFile, words => {
      expect(words).toEqual([
        'a', 'a', 'a',
        'b', 'b', 'b', 'b', 'b',
        'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
        'd',
        'e', 'e',
        'f'
      ]);
    });
  });
});