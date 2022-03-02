const { resolveTxt } = require("dns");
let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "21192601",
        database: "work"
});

connection.connect(function(error){
    if (error){
        console.log(error);
    } else {
        console.log("Conexion correcta.")
    }
});

//ID Y NOTA DE LOS ALUMNOS  ENTRE 1 Y 30

let sql= 'SELECT id_student, mark FROM mark WHERE (id_mark BETWEEN 1 AND 30) OR (mark > 8 AND date < "2021-03-01")'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("ID Y NOTA DE LOS ALUMNOS  ENTRE 1 Y 30")
    }
});

//MEDIA POR ASIGNATURA ENTRE FECHAS DADAS

let sql= 'SELECT AVG(mark) FROM mark WHERE id_subject=1 AND date BETWEEN "2022-01-01" AND "2022-01-03"';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("MEDIA EN ASIGNATURA 1 ENTRE FECHAS DADAS")
    }
});

//MEDIA POR ALUMNO ENTRE FECHAS DADAS

let sql= `SELECT id_student, AVG (mark) FROM mark WHERE id_student 
AND date BETWEEN "2022-01-01" AND "2022-01-03" GROUP BY id_student`;
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("MEDIA POR ALUMNO ENTRE FECHAS DADAS")
    }
});