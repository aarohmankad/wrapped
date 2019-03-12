const express = require('express'),
  app = express(),
  port = process.env.PORT || 8000;

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

function scheduleEmail(event) {
  const html = `
    <h1>${event.name}'s Special Day is Coming Up!</h1>
    <small>(It's on ${event.date}, in case you forgot.)</small>

    <p>Let's make sure we get them something special. Here are some ideas you've told us about:</p>
    <ul>
      ${event.ideas.map(idea => `<li><a href=${idea}>${idea}</a></li>`)}
    </ul>

    <p>We hope ${event.name}'s day is amazing!</p>
    <p>The Folks @ Wrapped</p>
  `;
  const msg = {
    to: event.gifter,
    from: 'thefolks@wrapped',
    subject: `${event.name}'s Special Day is Coming Up!`,
    html,
  };
  mail.send(msg);
}

app.use(express.json());

app.post('/', (req, res) => {
  console.log('Hello Request!', { body: req.body });
  res.send({ success: 'maybe', body: req.body });
  scheduleEmail(req.body);
});

// Start server
app.listen(port);
console.log(`Magic happens on port: ${port}`);
