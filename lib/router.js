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
    this.render("messages");
})

Router.route("/nvl_art", function () {
    this.render("nvl_art")
})

Router.route("/membres", function () {
    this.render("membres")
})

Router.route("/profil", function () {
    this.render("profil")
})