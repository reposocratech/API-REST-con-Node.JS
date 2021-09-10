var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');

/* GET home page. */
// localhost:3000
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req, res) => {
  const sql = `SELECT * FROM usuario`

  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.json(result)
  });
});

// localhost:3000/:id
router.get('/:id', (req, res) => {
  // let id = req.params.id;
  const {id} = req.params;
  const sql = `SELECT * FROM usuario WHERE user_id = ${id}`
  connection.query(sql, (error, result) => {
    if(error) {
      res.status(404).json({message: 'Error de conexión'})
    }
    console.log(result);
    res.json(result);
  });
});

// localhost:3000/
router.post('/', (req, res) => {
  const {name, age} = req.body;
  let sql = `INSERT INTO usuario (user_name, user_age) VALUES ('${name}', ${age})`
  connection.query(sql, (error, result) => {
    if(error) {
      res.status(404).json({message: 'Error de conexión'})
    }
    console.log(result);
    res.send('usuario creado correctamente')
  });
});

// localhost:3000/:id
router.put('/:id', (req, res) => {
  const {id} = req.params; 
  const {name, age} = req.body;
  console.log(req.body);
  let sql = `UPDATE usuario SET user_name = '${name}', user_age = ${age} WHERE user_id = ${id}`
  connection.query(sql, (error, result) => {
    if(error) throw error;
    console.log(result);
    res.send('usuario modificado correctamente');
  });
});

//localhost:3000/:id
router.delete('/:id', (req, res) => {
  const {id} = req.params; 
  sql = `DELETE FROM usuario WHERE user_id = ${id}`
  connection.query(sql, (error, result) => {
    if(error) throw error;
    console.log(result);
    res.send('usuario eliminado correctamente');
  });
});

module.exports = router;
