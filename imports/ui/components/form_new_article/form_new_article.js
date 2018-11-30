import Alerts from "/lib/alerts.js";

Template.form_new_article.events({
    "submit .js-new-article"(event, instance) {
        event.preventDefault();

        const msgVal = event.target.msg.value;

        Articles.insert({
                msg: msgVal,
                createdAt: Date.now(),
                ownerId: Meteor.userId()

            }),

            event.target.msg.value = '';

    }
})

Template.form_new_article.events({
    "submit .js-new-article"(event, instance) {
        event.preventDefault()

        Router.go("/")
        Alerts.success("Le message à bien été envoyé");
    }
})