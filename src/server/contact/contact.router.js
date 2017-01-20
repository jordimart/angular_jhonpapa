var Controller = require ('./contact.controller');

module.exports = function(router) {
    
router.post('/sendmail', Controller.sendEmail);

};
