const fs = require('fs').promises;
const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  //deleteFile
} = require('../lib/FileSystem');

beforeAll(() => {
  mkdirp('./testdir/test'),
  writeJSON('./testdir/test/test2.txt', { name: 'fido', age: 6 });
  writeJSON('./testdir/test/fileToDelete.txt', { name: 'snoopy', age: 4 });
});
afterAll(() => {
  fs.unlink('./testdir/test/test.txt');
  fs.unlink('./testdir/test/test2.txt');
  fs.rmdir('./testdir', { recursive: true });
});
describe('file system function module', () => {
  describe('validate writeJSON', () => {
    it('it correct writes a JSON object', () => {
      return writeJSON('./testdir/test/test.txt', { name: 'spot' })
        .then(() => {return fs.readFile('./testdir/test/test.txt', 'UTF8');})
        .then((contents) => expect(contents).toEqual('{"name":"spot"}'));
    });
  });
  describe('validate readJSON', () => {
    it('readJSON correctly reads a file', () => {
      return readJSON('./testdir/test/test.txt')
        .then((contents) => expect(contents).toEqual('{"name":"spot"}'));
    });
  });
  describe('validate readDirectoryJSON', () => {
    it('readDirectoryJSON should return an array of filenames', () => {
      return readDirectoryJSON('./testdir/test/')
        .then((contentArr) => expect(contentArr).toEqual(['fileToDelete.txt', 'test.txt', 'test2.txt']));
    });
  });
  describe('validate updateJSON', () => {
    it('updateJSON should add a field and value to an object', () => {
      return updateJSON('./testdir/test/test2.txt', { weight: '15 lbs' });     
    });
  });
//     describe('validate deleteFile', () => {
//     it('deleteFile should delete a file', () => {
//       return deleteFile('./testdir/test/fileToDelete.txt')
//         .then((result) => expect(result).toBeNull());
//     });
//   });
});
