const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

// Send user an email
const sendEmail = (sender, recipient, subject, message, cb) => {
  // Compose email from incoming request
  const fromEmail = new helper.Email(sender);
  const toEmail = new helper.Email(recipient);
  const content = new helper.Content('text/plain', message);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);
  const sgReq = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  // Send email using SendGrid
  sg.API(sgReq)
    .then((sgRes) => cb(sgRes.statusCode))
    .catch(({ sgRes }) => {
      cb(sgRes.statusCode, sgRes.body.errors[0].message)
    });
};

module.exports = { sendEmail };