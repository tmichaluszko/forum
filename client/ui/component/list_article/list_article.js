/*Template.list_article.onCreated(function () {

    let allMessage = Articles.find({}).fetch()
    let allMessageSorted = allMessage.sort((a, b) => {
        return a.createdAt - b.createdAt
    })
    this.allMessage.set(allMessageSorted)
})*/

import {
    ReactiveVar
} from "meteor/reactive-var";

//import {Newmsg} from message.js

Template.list_article.onCreated(function () {
    this.allMessage = new ReactiveVar(null)

    let allMessage = Articles.find({}).fetch();

    let allMessageSorted = allMessage.sort((a, b) => {
        return a.createdAt - b.createdAt
    })
    this.allMessage.set(allMessageSorted)
})


Template.list_article.helpers({
    articles() {
        return Template.instance().allMessage.get()
    },

});