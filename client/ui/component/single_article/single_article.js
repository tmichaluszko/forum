Template.single_article.events({
    "click .js-edit-msg"(event, instance) {
        Modal.show("modal_edit_msg", instance.data);
    }
});