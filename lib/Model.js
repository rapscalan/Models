const fs = require('fs').promises;
const {
  writeJSON
} = require('./FileSystem');
const uuid = require('uuid/v4');

class Model{
  constructor(type, schema){
    this.type = type;
    this.schema = schema;
  }

  create(obj){
    const validatedObj = this.schema.validate(obj);
    const id = uuid();
    return writeJSON(`${this.model}/${id}`, validatedObj);
  }

  findById(){

  }

  find(){

  }

  findByIdAndUpdate(){

  }

  findByIdAndDelete(){

  }
}

