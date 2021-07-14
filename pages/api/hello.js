// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sailors'
});

export default function handler(req, res) {
  connection.query(
    'SELECT * FROM boats',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      res.status(200).json(results);
    }
  );
  
}
