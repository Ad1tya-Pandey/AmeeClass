const nodemailer = require('nodemailer');

const transporter =  nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: "ProLearnerMax@gmail.com",
        pass: "hxqubviceerzqfpm",
    }
}) 
const mailOptions = {
  from: 'ProLearnerMax@gmail.com',
    to: "devarshidoshi007@gmail.com",
  subject: `The subject goes here`,
  html: `The body of the email goes here in HTML`,
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("sent "+info.response);
  }
});