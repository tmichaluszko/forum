Router.configure({
    layoutTemplate: "main"
});

//action faite avant l'accès au router
Router.onBeforeAction(function() {
    if (!Meteor.userId()) {
        this.render("atForm")
    } else if (!Meteor.user().profile.pseudo) {
        this.render("setPseudo")
    } else {
        this.next()
      }
    
  });

  //cas d'exemple version router David avec subscription dans le router et envoie de donnée dans la template

  Router.route("/dentist/patient/:_id", {
    layoutTemplate: "main",
    name: "patient",
    waitOn: function() { // on attant que toutes les données soit prete d'ou la fonction qui retourne un tableau de toutes les données ( sorte de handler )
      return [
        Meteor.subscribe("Categories"),
        Meteor.subscribe("Patients", this.params._id),
        Meteor.subscribe("Propositions", this.params._id),
        Meteor.subscribe("Analytics", Meteor.userId())
      ];
    },
    data: function() { // helper envoyé à la template accessible uniquement dans la template
      return {
        Categories: Categories.find(),
        Sheets: Sheets.find(),
        RefundStatuses: RefundStatuses.find(),
        Analytics: Analytics.find()
      };
    }
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

Router.route("/nvl_art/:_id", function () {
    this.render
})

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

Router.route("/discution", function () {
    if (Meteor.user()) {
        if (Meteor.user().profile.pseudo) {
            this.render("discution");
        }
    } else {
        this.render("atForm");
    }
});