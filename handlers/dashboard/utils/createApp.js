const express = require("express");
const session = require("express-session");
const passport = require("passport");
const store = require("connect-mongo");
const path = require("path");
const ms = require("ms");

const routes = require("../routes");

const { discordStrategy } = require("../strategies/discord");

function createApp(client) {
   discordStrategy(client);

   const app = express();

   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
  app.set("views", path.join(__dirname, "../views"));
   app.use(express.static(path.join(__dirname, "../public")));
   app.set("view engine", "ejs");

   app.use(
      session({
         secret: "178AC1SAVLLUP5T2SCKT",
         resave: false,
         saveUninitialized: false,
         cookie: {
            maxAge: ms("15m"),
         },
        store: store.create({
            mongoUrl: "mongodb+srv://YassineHzz:YassineHzz@cluster0.vo589.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
         }),
      })
   );
    


   app.use(passport.initialize());
   app.use(passport.session());

   app.use("/", routes);

   return app;
}

module.exports = { createApp };
