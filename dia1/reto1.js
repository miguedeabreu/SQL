const { resolveTxt } = require("dns");
let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "21192601",
        database: "codenotch"
});

connection.connect(function(error){
    if (error){
        console.log(error);
    } else {
        console.log("Conexion correcta.")
    }
});

// CREACION DE TABLAS

let sql= 'CREATE TABLE alumno (id_alumno INT AUTO_INCREMENT PRIMARY KEY)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla")
    }
});

let sql= 'CREATE TABLE profesor (id_profesor INT AUTO_INCREMENT PRIMARY KEY)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla")
    }
});

let sql= 'CREATE TABLE asignatura (id_asignatura INT AUTO_INCREMENT PRIMARY KEY)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla")
    }
});


// He colocado los ID de cada tabla como PK porque son un identificador unico que
// los diferencia del resto.


// AÑADIR COLUMNAS

let sql= 'ALTER TABLE `codenotch`.`alumno` ADD COLUMN `direccion` VARCHAR(45)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla")
    }
});

// BORRAR COLUMNAS

let sql= 'ALTER TABLE `codenotch`.`alumno` DROP COLUMN `direccion`'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla")
    }
});

// ELIMINAR TABLA DE FORMA PERMANENTE

let sql= 'DELETE FROM profesor'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla")
    }
});


connection.end();