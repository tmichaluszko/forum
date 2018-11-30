export default {
    success(message) {
        return $.notify({
            message: message
        }, {
            type: "success",
            animate: {
                enter: "animated fadeInRight",
                exit: "animated fadeOutRight"
            }
        });
    },
    error(message) {
        return $.notify({
            message: message
        }, {
            type: "danger",
            animate: {
                enter: "animated fadeInRight",
                exit: "animated fadeOutRight"
            }
        });
    },
}
/*/ensuite dans la template ou tu as besoin de tes alerts tu fais : 

import Alerts from "/lib/alerts.js";
//et après tu peux faire : 

Alerts.error(
    "Erreur : le pseudo existe deja "
);
//ou 

Alerts.success("la fiche à bien été ignorée");*/