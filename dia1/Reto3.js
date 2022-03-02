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

//ELIMINAR DE LA BASE DE DATOS LAS NOTAS QUE TENGAN +10AÑOS

let sql= "DELETE FROM `work`.`mark` WHERE (`date` < '2012-03-01')";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Se colocaron las notas a cero")
    }
});

//ACTUALIZACION DE NOTA INFERIOR A 5 QUE SEA 5

let sql="UPDATE `work`.`mark` SET `mark` = '5' WHERE (`mark` < 5)";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Se colocaron las notas a cero")
    }
});