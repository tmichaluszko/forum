/*Template.list_users.onCreated(function() {
    this.subscribe("listUser");
  });*/

Template.list_users.helpers({
    users() {
        return Meteor.users.find({
            _id: {
                $ne: Meteor.userId()
            }
        }).fetch();
    }
});