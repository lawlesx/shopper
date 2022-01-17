// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sailors'
});
console.log("Outside handler")
export default function handler(req, res) {
  console.log("Hello");
  console.log(req.query.id);
  connection.query(
    'SELECT * FROM boats',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      res.status(200).json(results);
    }
  );
  
}
