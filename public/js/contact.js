var nodemailer = require('nodemailer');

var visitor_name = document.getElementById('fname').value 
var visitor_email = document.getElementById('email').value
var visitor_message = document.getElementById('message_text').value
console.log("visitor_name: " + visitor_name );
console.log("visitor_email: " + visitor_email );
console.log("visitor_message: " + visitor_message );

// var mailOptions = {
//     from: 'm.quinise@gmail.com', /**ToDo**change emails */
//     to: '{}',
//     subject: {},
//     text: {}
//   }

  