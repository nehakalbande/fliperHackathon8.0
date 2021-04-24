var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
const dbkey = require("./config/db.js");
const URI = dbkey.mongoUrl;
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const passport = require("passport");
require("./config/passport");

app.use(passport.initialize());
app.use(passport.session({
	secret: "sadf",
	cookie:{
		secure: true,
	}
}));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
  

const connectWithRetry = (uris, options, maxAttempts = 5) => {
	connectWithRetry.timeout = connectWithRetry.timeout || 0;
	return mongoose.connect(uris, options, (err) => {
		if (err)
			if (connectWithRetry.timeout <= (maxAttempts - 1) * 5000) {
				console.error(
					`Failed to connect to mongo on startup - retrying in ${(connectWithRetry.timeout += 5000) / 1000
					} sec`,
					connectWithRetry.previousError != "" + err
						? `\n${(connectWithRetry.previousError = err)}`
						: ""
				);
				setTimeout(connectWithRetry, connectWithRetry.timeout, uris, options);
			// eslint-disable-next-line no-undef
			} else process.exit(1);
		else console.log("Connected to MongoDB successfully!");
	});
};

connectWithRetry(URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

app.get("/", (req, res)=>{
	res.send("hi");
});
app.use("/auth",authRoutes);

module.exports = app;
