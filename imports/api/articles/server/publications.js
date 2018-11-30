import {Articles} from "../articles.js"

Meteor.publish("listArt", function () {
  return Articles.find()
})