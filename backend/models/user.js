const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
	{
		fullName: {
			type: String,
			maxlength: 50,
			require: false,
		},
		email: {
			type: String,
			trim: true,
			unique: 1,
			require: true,
		},
		hash_password: {
			type: String,
			minlength: 8,
			require: false,
		},
		facebook:{
			type:Object,  
			// unique: 1,
			require: false,
		}
	},
	{ timestamps: true }
);

userSchema.virtual("password").set(function (password) {
	this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
	authenticate: function (password) {
		return bcrypt.compareSync(password, this.hash_password);
	},
};

module.exports = mongoose.model("User", userSchema);