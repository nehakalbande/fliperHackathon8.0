const User = require("../models/user");
const bcrypt = require("bcrypt");
// const { password } = require("../config/db");
// const passport = require("passport");



const signup = async(req, res)=>{
	console.log(req.body.email);
	const user = await User.findOne({email: req.body.email});
	if(user){
		console.log(user.email);
		return res.status(400).json({message:"User with that email already exist"});
	}

	const hashPassword = bcrypt.hashSync(req.body.password, 10 );
	const _user = new User({
		email: req.body.email,
		hash_password: hashPassword,
	});

	const result = await _user.save();

	if(result){
		return res.status(200).json({message:"User sucessfully Registerd"});

	}
	else{

		return res.status(400).json({message:"Something went wrong!"});
	}
};






module.exports = {
	signup,
};

