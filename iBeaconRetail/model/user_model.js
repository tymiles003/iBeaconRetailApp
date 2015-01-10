var schemas = require('./db_collections');
var User = collections.User;
var Item = collections.Item;

exports.checkUsername = function(user) {
	if (user.length > global.MAX_USERNAME_LENGTH || user.length == 0) {
		return global.INVALID_USERNAME;
	}
	return 0; 
}

exports.checkPassword = function(password) {
	if (password.length > global.MAX_PASSWORD_LENGTH || password.length == 0) {
		return global.INVALID_PASSWORD;
	}
	return 0;
}

exports.updateDeviceToken = function(user_id, device_token, callback) {
	var user = User;
	user.update({ _id : user_id }, { $set: { device_token : device_token}},
		function(err, res) {
			if (err) return callback({errCode : global.ERROR});
			if (res == null) return callback({errCode: global.ERROR});
			return callback({errCode: global.SUCCESS});
		});
}

exports.getItemByID = function(item_id, callback){
	Item.findById(item_id, function(err, res){
		if (res == null) return callback({errCode : gobal.INVALID_ITEM_ID});
		return callback({errCode : global.SUCCESS, item_name : res.item_name, price : res.price, description : res.description, category.res.category});
	});
}