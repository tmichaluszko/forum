let moment = require("moment");
Template.registerHelper("Log", function (logThis) {
    console.log(logThis);
});
Template.registerHelper("fromNow", function (date) {
    return moment(date).fromNow();
});

Template.registerHelper("getUserPseudo", function (userId) {
    return Meteor.users.findOne({
        _id: userId
    }).profile.pseudo;
});

Template.registerHelper("getAllUserPseudo", function (userId) {

    return Meteor.users.find({
        _id: userId
    }).profile.pseudo;
});