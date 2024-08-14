const express = require('express');

const app = express();
const port = 6500;

const data = [
  { id: 1, name: 'Vinod', email: 'vinod@vinod.co', phone: '9731424784' },
  { id: 2, name: 'Shyam', email: 'shyam@xmpl.com', phone: '9731424000' },
];

app.get('/api/persons', (req, resp) => {
  resp.json(data);
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
