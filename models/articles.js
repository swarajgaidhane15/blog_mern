const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema (Backbone) of the database created
const articleSchema = new Schema({
    title: { type: String, required: true },
    article: { type: String, required: true },
    author: { type: String, required: true },
});

//Model based on Schema created
//This will be the COLLECTION in our database
const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;