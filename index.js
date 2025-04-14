const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api/ping', (req, res) => {
  res.json({ status: 'online', message: 'WizBot backend ativo!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
