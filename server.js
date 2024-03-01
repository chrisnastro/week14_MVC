const express = require("express");
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers: require("./utils/helpers") });

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extender: true }));
app.use(express.static("public"));
app.engine("handlebars, hbs.engine");
app.set("view engines", "handlebars");

app.use(session({
    secret: process.env.SECRET,
    store: new SequelizeStore({ db: sequelize }),
    resave: false,
    saveUninitialized: false,
})
);

app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});