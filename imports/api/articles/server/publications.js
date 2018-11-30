Meteor.publish("listArt", function () {
  return Articles.find({})
})