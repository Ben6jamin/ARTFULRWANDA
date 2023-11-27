const mongoose = require('mongoose');


const ImageSchema = new mongoose.Schema({
    image:String
},
  {
    collection: "image",
  }
);

mongoose.model('Image', ImageSchema)
