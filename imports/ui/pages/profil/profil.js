import Alerts from "/lib/alerts.js";
import "./profil.html"
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
        Alerts.success("Votre pseudo a bien été modifié");
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