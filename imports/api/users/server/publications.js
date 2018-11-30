
Meteor.publish("listMembres", function () {
  return Meteor.users.find({})
})