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

Router.route("/messages", function () {
    if (Meteor.user()) {
        if (Meteor.user().profile.pseudo) {
            this.render("messages");
        }
    } else {
        this.render("atForm");
    }
});

Router.route("/nvl_art", function () {
    if (Meteor.user()) {
        if (Meteor.user().profile.pseudo) {
            this.render("nvl_art");
        }
    } else {
        this.render("atForm");
    }
});

Router.route("/membres", function () {
    if (Meteor.user()) {
        if (Meteor.user().profile.pseudo) {
            this.render("membres");
        }
    } else {
        this.render("atForm");
    }
});

Router.route("/profil", function () {
    if (Meteor.user()) {
        if (Meteor.user().profile.pseudo) {
            this.render("profil");
        }
    } else {
        this.render("atForm");
    }
});