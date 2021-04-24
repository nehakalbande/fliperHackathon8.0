const {signup} = require("../controllers/auth");
const router = require("express").Router();
const {isRequestValidated} = require("../validators/auth");
const jwtSecret = require("../config/jwt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");
// const { NotExtended } = require("http-errors");

router.post("/signup", isRequestValidated, signup );
router.post("/signin", (req, res, next) =>{
	passport.authenticate("local", (err, user)=>{
		if(err){
			console.log(err);
			res.send({error: "something went wrong"});
		}        
		else{
			req.logIn(user, async err =>{
				if(err){
					res.status(502).send({error:"Something went wrong"});
				}
				const _user = await User.findOne({
					email : user.email,
				});
				console.log(_user);
				const token = jwt.sign({email: _user.email}, jwtSecret.secret);
				res.status(200).send({
					auth: true,
					token: token,
					message: "user found and logges in",
				});
			});
		}
	})(req, res, next);
});

router.get("/user" ,(req, res, next)=>{
	console.log(req.headers);
	passport.authenticate("jwt", {session: false}, (err, _user)=>{
		if(err){
			// console.log(err);
			res.send({error: err});
		}
		if(_user){
			console.log(_user);
			res.status(200).send({
				auth: true,
				email: _user.email,
			});
		}
		else{
			res.send({error: "User not Authenticated"});

		}
	})(req, res, next);
});

router.get("/facebook", passport.authenticate("facebook" ,{scope: ["email"]}));

router.get("/facebook/callback", passport.authenticate("facebook", {
	session: false,
}), (req, res) => {
	if(req.user.jwttoken){
		res.json({
			auth: true,
			email: req.user.email,
			token: req.user.jwttoken,
		});

	}
	else{
		res.json({
			auth: false,
		});
	}
});



module.exports = router;