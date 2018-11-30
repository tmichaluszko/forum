import "setPseudo.html"
Template.setPseudo.events({
    "submit .js-new-pseudo"(event, instance) {
        event.preventDefault();
        const pseudo = event.target.pseudo.value
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                "profile.pseudo": pseudo
            }
        });
    }
})