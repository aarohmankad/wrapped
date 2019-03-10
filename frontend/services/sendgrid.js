import mail from '@sendgrid/mail';

mail.setApiKey(
  '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'
);

function scheduleEmail(event) {
  const msg = {
    to: 'aarohmankad@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  mail.send(msg);
}

export default { scheduleEmail };
