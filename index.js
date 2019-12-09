const FileSystem = require('./lib/FileSystem');
//console.log(FileSystem.writeJSON('./testFile', { name: 5 }));
const value = () => {return FileSystem.updateJSON('./testFile', { age: 4 });};
console.log(value);
