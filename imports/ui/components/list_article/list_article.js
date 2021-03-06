import "./list_article.html"
import {
    Articles
} from "/imports/api/articles/articles.js"

Template.list_article.onCreated(function () {
    this.subscribe("listArt")
})

Template.list_article.helpers({
    articles() {
        return Articles.find({}).fetch()
    }
})