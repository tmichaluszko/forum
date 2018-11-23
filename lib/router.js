Router.configure({
    layoutTemplate: "main"
});
//route de base
Router.route("/", function () {
    if (Meteor.user()) {
        if (Meteor.user().profile) {
            if (Meteor.user().profile.pseudo) {
                this.render("accueil");
            }
        } else {
            this.render("setPseudo");
        }
    } else {
        this.render("atForm");
    }
});