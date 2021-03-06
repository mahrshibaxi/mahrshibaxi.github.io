import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function writeUser(username, dbSettings) {
    console.log(`touched username ${username}`);
    const db = await open(dbSettings)
    await db.exec('CREATE TABLE IF NOT EXISTS user (name)');
    await db.exec(`INSERT INTO user VALUES ("${username}")`);
    const result = await db.each('SELECT * FROM user',(err)=>{
      console.log('writeuser', err);
    });
    console.log('Expected result', result);
    res.json(result);
  }
  
  export default writeUser;

 async function writeUser(username) {
    console.log('touched username ${username}')
    const db = await open ({
      filename: '/tmp/database.db',
      driver: sqlite3.database
    })
    await db.exec('CREATE TABLE IF NOT EXISTS user (name)');

  }
