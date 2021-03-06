// These are our required libraries to make the server work.

const express = require('express');
const fetch = require('node-fetch');
const sqlite3 = require('sqlite3').verbose(); // We're including a server-side version of SQLite, the in-memory SQL server.


const app = express();
const port = process.env.PORT || 3000;

const db = new sqlite3.Database(':memory:', (err) => {
  if(err){
    return console.error('err.message');
  }
  console.log('Connected to the in-memory SQL database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

async function writeUser(username,setting) {
  const db = await open(setting)
  await db.exec("CREATE TABLE IF NOT EXISTS user (name)");
  await db.exec('INSERT INTO user VALUES("${username}")');
  const result = await db.each("SELECT * FROM user");
  console.log("Expected result", result);
  res.json(result);
}

async function databasebaseBoot() {
  console.log('async DB boot')
  const db = await open ({
    filename: '/tmp/database.db',
    driver: sqlite3.database
  })
}

async function writeUser(username) {
  console.log('touched username ${username}')
  const db = await open ({
    filename: '/tmp/database.db',
    driver: sqlite3.database
  })
  await db.exec('CREATE TABLE IF NOT EXISTS user (name)');
}


function processDataForFrontEnd(req, res) {
  const baseURL = ''; // Enter the URL for the data you would like to retrieve here

  // Your Fetch API call starts here
  // Note that at no point do you "return" anything from this function -
  // it instead handles returning data to your front end at line 34.
    fetch(baseURL)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        res.send({ data: data }); // here's where we return data to the front end
      })
      .catch((err) => {
        console.log(err);
        res.redirect('/error');
      });
}

// Syntax change - we don't want to repeat ourselves,
// or we'll end up with spelling errors in our endpoints.
// 
app.route('/api')
  .get((req, res) => {processDataForFrontEnd(req, res)})

  .put((req, res) => {
    console.log("/api put request", req.body);
    //res.send('congratulation! you successfully requested'); // simple mode
    if(!req.body.name)
    {
      console.log(req.body);
      res.status('418').send('something went wrong, your response is empty')
    } else 
    {
      console.log(req.body);
      res.send('congratulation! you successfully requested');
      writeUser(req.body.name).then((result) => {
      console.log(result);
      });
      //res.send('congratulation! you successfully requested'); // simple mode
      //}).catch((err) => {console.log(err);})
    }
  })


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
databasebaseBoot();
