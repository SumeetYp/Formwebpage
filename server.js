const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000; // You can change this port to your preference

// Serve static files from the specified directory
app.use(express.static(path.join(__dirname, 'E:\\MINI PROJECT\\Mandet\\public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define the root route to serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join('E:\\MINI PROJECT\\Mandet\\public', 'index.html'));
});

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  // Replace this section with your desired server-side logic
  // For this example, we are logging the form data to the console
  console.log('Received form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Sending a response to the client
  res.send('Form submission received successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
