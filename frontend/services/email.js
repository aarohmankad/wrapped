function schedule(event) {
  fetch('http://localhost:8000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
}

export default { schedule };
