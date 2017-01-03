var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);

    app.post('/send',function(req,res,next){
    		// Pour valiser l'utilisation de la boite mail
    		//https://www.google.com/settings/security/lesssecureapps
			var transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: 'blablabla@blablabla.com', //l'adresse mail du type
					pass: 'blablabla'//Le mot de passe
				}
			});
			var mailOptions = {
				from: req.body.email,
				to: 'blablabla@blablabla.com',//l'adresse mail du type
				subject: 'Drive Smartphone',
				text: req.body.emailText,
				html: '<p>Vous avez reçu un mail de <b>'+req.body.email+'</b><p><p>'+req.body.emailText+'</p>'
			};
			transporter.sendMail(mailOptions, function(error, info){
				if(error){
					console.log(error);
				}else{
					console.log('Message sent: '+info.response);
				}
			});

			
		});
  });




