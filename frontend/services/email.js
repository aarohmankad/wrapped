function schedule(event) {
  fetch('https://wrapped-lambda.now.sh/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  }).then(res => console.log(res.json()));
}

export default { schedule };
