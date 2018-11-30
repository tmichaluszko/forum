Template.logout.events({
    "click .js-logout"(event, instance) {
        Meteor.logout();
    }
});