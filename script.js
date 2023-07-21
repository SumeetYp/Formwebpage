document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData))
  })
    .then((response) => response.text())
    .then((message) => {
      document.getElementById('response').textContent = message;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
