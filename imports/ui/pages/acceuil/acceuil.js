Template.accueil.helpers({
    articles() {

        return Articles.find({}).fetch()
    }
})