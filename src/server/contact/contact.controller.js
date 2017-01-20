var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

exports.sendEmail = function(req, res) {
  var options = {
    auth: {
      //api_key: 'YOUR_SENDGRID_API_KEY'
      api_key: 'apikey'
    }
  };
  var mailer = nodemailer.createTransport(sgTransport(options));
  mailer.sendMail(req.body, function(error, info) {
    if (error) {
      res.status('401').json({
        err: info
      });
    } else {
      res.status('200').json({
        success: true
      });
    }
  });

};
