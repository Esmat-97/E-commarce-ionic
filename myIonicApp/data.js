const express=require('express');
const mysql=require('mysql');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const con =  mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'market'
});



app.get('/getusers',(req,res)=>{
  const query = "SELECT * FROM  users";
  con.query(query, (err, result) => {
    if (err) {
        // If an error occurs, send an error response
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
        // If successful, send the fetched data as a response
        res.json(result);
    }
});
    
});



app.get('/getproducts',(req,res)=>{
  const query = "SELECT * FROM  products";
  con.query(query, (err, result) => {
    if (err) {
        // If an error occurs, send an error response
        console.error("Error executing query:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    } else {
        // If successful, send the fetched data as a response
        res.json(result);
    }
});
    
});




app.post('/api', (req, res) => {
  const { fname, email , password} = req.body;
  const query = 'INSERT INTO users (username, email , password) VALUES (?,?,?)';
  con.query(query, [ fname, email , password], (error, results) => {
    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});



app.post('/insertproduct', (req, res) => {
  const { product, image, price , user_id , quantity_in_stock }= req.body;

  // Insert data into MySQL
  const query = 'INSERT INTO products (product_name , image, price , quantity_in_stock, user_id ) VALUES (?,?,?,?,?)';
  con.query(query, [ product, image , price , quantity_in_stock , user_id ], (error, results) => {

    if (error) throw error;
    console.log('Data inserted into MySQL');
    res.send('Data inserted into MySQL');
  });
});


app.listen(1999,()=>{
    console.log('the server listen at posrt http://localhost:1999');
    });