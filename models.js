var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		relationship = require("mongoose-relationship");

var language_schema = new Schema({
	title:String,
	description:String,
	propiedades:[{type: Schema.ObjectId, ref: "Propiedad"}]
});
var Language = mongoose.model("Language",language_schema);

var property_schema = new Schema({
	title:String,
	description:String,
	visits:{type: Number,default:0},
	language: {type: Schema.ObjectId, ref: "Language",childPath: "propiedades"},
	slug:String,
	markdown:String
});

property_schema.plugin(relationship,{relationshipPathName: "language"});


var Property = mongoose.model("Propiedad",property_schema);

var user_schema = new Schema({
	email:String,
	password:String
});

var User = mongoose.model("User",user_schema);

module.exports.Language = Language;
module.exports.Property = Property;
module.exports.User = User;

