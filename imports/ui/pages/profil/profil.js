Template.profil.events({
    "submit .js-change-pseudo"(event, instance) {
        event.preventDefault();
        const pseudo = event.target.pseudo.value
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                "profile.pseudo": pseudo
            }
        });
        window.alert("Votre pseudo à bien été modifié")
    }
})

Template.profil.events({
    "submit .js-change-pseudo"(event, instance) {
        event.preventDefault()
        Router.go("/")

    }
})

Template.profil.helpers({
    pseudo() {
        return Meteor.users.findOne({
            _id: Meteor.userId()
        }).profile.pseudo
    }
})