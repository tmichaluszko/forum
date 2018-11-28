Meteor.publish("listArt", function () {
    return Articles.find({})
})

Meteor.publish("listMembres", function () {
    return Meteor.users.find({})
})