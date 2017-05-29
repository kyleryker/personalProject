const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const React = require('react');
const path = require ('path');
let connectionString = "postgres://postgres:mikhail4@localhost:3001/postgres";
const app = module.exports = express();
const cors = require('cors');

app.use(cors());


let massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance);

let db = app.get('db');

app.use(bodyParser.json());

app.use(express.static('build'))

app.get('/inventory/turnover', (req, res, next) => {
    db.turnover([parseInt(req.query.value)], (err, data) => {
        res.status(200).send(data);
    });
});
app.get('/inventory/writeoff', (req, res, next) => {
    db.writeoff([parseInt(req.query.value)], (err, data) => {
        res.status(200).send(data);

    });
});
app.get('/inventory/holding', (req, res, next) => {
    db.holding([parseInt(req.query.value)], (err, data) => {
        res.status(200).send(data);

    });
});
app.get('/inventory/avginventory', (req, res, next) => {
  console.log(parseInt(req.query.value) + "fun");
    db.avginventory([parseInt(req.query.value)], (err, data) => {
        res.status(200).send(data);
        console.log(data);
    });
});
app.get('/inventory/daystosell', (req, res, next) => {
  console.log("lame"+req.query.value);
    db.daystosell([parseInt(req.query.value)], (err, data) => {
      console.log(data);
      console.log(err);
        res.status(200).send(data);

    });
});

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.listen(3002, () => console.log('listening on port 3002'));
