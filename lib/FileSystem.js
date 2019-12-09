const fs = require('fs').promises;

const mkdirp = (path) => { 
  fs.mkdir(path, { recursive: true }, (err) => {
    if(err) {
      console.log(err);
    }
  });
};

const writeJSON = (pathToObj, obj) => { 
  return fs.writeFile(pathToObj, JSON.stringify(obj)).then(() => obj);
};

const readJSON = (pathToObj) => {
  return fs.readFile(pathToObj, 'UTF8').then((contents) => contents);
};

const readDirectoryJSON = (pathToDir) => {
  return fs.readdir(pathToDir);
};

const updateJSON = (pathToObj, objField) => {
  return readJSON(pathToObj)
    .then((obj) => {return writeJSON(pathToObj, { ...obj, objField });});
    //.then((content) => {return writeJSON(pathToObj, content);});
};

const deleteFile = (pathToObj) => {
  fs.unlink(pathToObj);
};

module.exports = { 
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
};

