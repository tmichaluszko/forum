import "./acceuil.html"
Template.accueil.helpers({
    articles() {

        return Articles.find({}).fetch()
    }
})