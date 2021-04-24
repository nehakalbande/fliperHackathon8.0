const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user");
const FacebookStrategy = require("passport-facebook").Strategy;
const jwtSecret = require("./jwt");
const jwt = require("jsonwebtoken");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.serializeUser((user, done) => {
	// console.log("seriral");
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findOne({id: id});
	console.log(user);
	delete(user.dataValues.password);
	// console.log("Desir", user);
	done(null, user);
});


passport.use(new LocalStrategy({
	usernameField: "email",
	passwordField: "password"
},async (email, password,done)=>{
	// console.log(email, password);
	const user = await User.findOne({email: email});
	// console.log(user);
	if(!user){
		return done(null, false, {message: "User not found"});
	}
	if(bcrypt.compareSync(password, user.hash_password)){
		return done(null, user);
	}
	else{
		return done(null, false, {message:"Incorrect password"});
	}
}));

const opts = {
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey: jwtSecret.secret,
};	

passport.use("jwt", new JWTStrategy(opts,async(jwt_payload, done)=>{
	console.log(jwt_payload);
	try{
		const user = await User.findOne({
			email : jwt_payload.email,
		});
		if(user){
			console.log("userFound in db");
			done(null, user);

		}
		else{
			console.log("user not found in db");
			done(null, false);
		}
	}
	catch(err){
		console.log(err);
	}
})
);
const facebookopts = {
	clientID: "225864926070903",
	clientSecret: "34c47f07fc2f085d4d1fff02f796ec4c",
	callbackURL: "http://localhost:4000/auth/facebook/callback",
	profileFields: ["id", "emails", "name"] 
};
passport.use(new FacebookStrategy(facebookopts, async (accessToken, refreshToken, profile, done) => {
	const _user = await User.findOne({email: profile.emails[0].value});
	const data = {
		id: profile.id,
		token: accessToken,
	};
	if(!_user){
		const user = new User({
			email : profile.emails[0].value,
			facebook: data,
		});
		await user.save();
		// console.log(user, response);
		if(user){
			const jwttoken = jwt.sign({email: user.email}, jwtSecret.secret);

			user.jwttoken = jwttoken;
			done(null, user);
		}
		else
			done({message: "somehting went wrong"}, false);

	}

	if(_user){
		const jwttoken = jwt.sign({email: _user.email}, jwtSecret.secret);
		_user.jwttoken = jwttoken;
		done(null, _user);
	}
}));




// passport.use(new FacebookStrategy({}, async(accessToken, refreshToken, done)=>{
//     const user = await User.findOne(profile.id)
// });