var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	username : String,
	password : String,
	device_token : String,
	profile : {
		gender : String,
		age : String,
		email : String,
	},
	favourite_items : [String],
	{collection : 'users'}
});

var Item = new Schema({
	item_id : String,
	item_name : String,
	price : String,
	description: String,
	category: String
})

var Request = new Schema({
	username : String,
	item_id : String,
	{collection : 'requests'}
});

var Notifications = new Schema({
	item_id : String,
	time : String,
	content : String
	{collection : 'Notifications'}
});

var collections = {
	User : mongoose.model('User', User),
	Item : mongoose.model('Item', Item),
	Request : mongoose.model('Request', Request)
};

//export mongoose collections
module.exports = collections;
