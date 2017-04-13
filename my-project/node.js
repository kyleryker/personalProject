const express = require ('express');
const bodyParser = require('body-parser');
const massive = require ('massive');
let connectionString = "postgres://postgres:mikhail4@localhost:3001/postgres";
const app = express();

let massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance);

let db = app.get('db');

app.use(bodyParser.json());

app.use(express.static('build'))

app.get('/inventory:year', (req, res, next) => {
  db.turnover((err,data) => {
    res.status(200).json(data);
    console.log(data);
  });
});
app.get('/inventory:period', (req, res, next) => {
  db.writeoff((err, data) => {
    res.status(200).json(data);
    console.log(data);
  });
});
app.get('./inventory:material', (req, res, next) => {
  db.holding((err, data) => {
    res.status(200).json(data);
    console.log(data);
  });
});
app.get('./inventory:period', (req, res, next) => {
  db.avginventory((err, data) => {
    res.status(200).json(data);
    console.log(data);
  });
});
app.get('./inventory:year', (req, res, next) => {
  db.daystosell((err, data) => {
    res.status(200).json(data);
    console.log(data);
  });
});
app.listen(3002, () => console.log('listening on port 3002'));
