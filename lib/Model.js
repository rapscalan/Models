const fs = require('fs').promises;
const {
  mkdirp,
  writeJSON,
  readDirectoryJSON
} = require('./FileSystem');

const uuid = require('uuid/v4');

module.exports = class Model{
  constructor(type, schema){
    this.type = type;
    this.schema = schema;
  }
  init() {
    return mkdirp(`./${this.type}`);
  }
  create(obj){
    const validatedObj = this.schema.validate(obj);
    const id = uuid();
    return writeJSON(`${this.type}/${id}`, { ...validatedObj, id });
  }

  findById(){

  }

  find(){
    return readDirectoryJSON(`./${this.type}`);
  }

  findByIdAndUpdate(){

  }

  findByIdAndDelete(){

  }
};


