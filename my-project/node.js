const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
let connectionString = "postgres://postgres:mikhail4@localhost:3001/postgres";
const app = express();

let massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance);

let db = app.get('db');

app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/api/home', (req, res, next) => {
  db.inventory(function(err,data){
    res.status(200).json(data);
  });
});

app.get('/api/item', (req, res, next) =>{
  if (req.id == item.id){
    res.status(200).json(item);
  }else{
    res.status(404).send('item not found');
  }
});

app.listen(3000, () => console.log('listening on port 3000'));
