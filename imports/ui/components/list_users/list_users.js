import "list_users.html"
Template.list_users.onCreated(function () {
    this.subscribe("listMembres");
})

Template.list_users.helpers({
    users() {
        return Meteor.users.find({
            _id: {
                $ne: Meteor.userId()
            }
        }).fetch();
    }
});