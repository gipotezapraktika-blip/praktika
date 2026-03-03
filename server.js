const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from calculator directory
app.use(express.static(path.join(__dirname, '.kiro/specs/personal-calculator')));

// Root route redirects to calculator
app.get('/', (req, res) => {
  res.redirect('/calculator-mockup.html');
});

app.listen(PORT, () => {
  console.log(`Calculator server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} to view the calculator`);
});
