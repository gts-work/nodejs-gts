const connectMongo = require("./connection");
const Contact = require("./contacts/contactsModel");
const User = require("./users/usersModel");

module.exports = {
    connectMongo,
    Contact,
    User,
};
