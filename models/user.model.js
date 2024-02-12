const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id:{
        type: String,
        default: uuidv4,
        required:true
    },
  userName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hobbies: {
    type: {
        type: [String], 
        default: [],
        required: true
    }
},
});

const User = mongoose.model('product', UserSchema);
module.exports = User;
