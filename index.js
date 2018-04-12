var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'haris.khan87@gmail.com',
    pass: ''
  }
});
