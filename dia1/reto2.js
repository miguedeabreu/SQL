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


//TABLAS

let sql= 'CREATE TABLE mark (id_mark INT AUTO_INCREMENT PRIMARY KEY)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla MARKS")
    }
});

let sql= 'CREATE TABLE student (id_student INT AUTO_INCREMENT PRIMARY KEY)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla STUDENTS")
    }
});

let sql= 'CREATE TABLE group (id_group INT AUTO_INCREMENT PRIMARY KEY)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla GROUPS")
    }
});

let sql= 'CREATE TABLE subject (id_subject INT AUTO_INCREMENT PRIMARY KEY)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla SUBJECTS")
    }
});

let sql= 'CREATE TABLE teacher (id_teacher INT AUTO_INCREMENT PRIMARY KEY)'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla TEACHERS")
    }
});

let sql= 'CREATE TABLE subject_teacher'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Tabla SUBJECT TEACHER")
    }
});

//MANERA DE INSERTAR

let sql= 'INSERT INTO student (first_name, last_name) VALUES ("Miguel", "Rodrigues")';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Se inserto estudiante")
    }
});

//SETEAR NOTAS DE TODOS LOS ESTUDIANTES A CERO

let sql= 'UPDATE mark SET mark = 0';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Se colocaron las notas a cero")
    }
});

//OBTENER NOMBRE Y APELLIDOS DE TODOS LOS ESTUDIANTES

let sql= 'SELECT first_name, last_name FROM work.student';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Se colocaron las notas a cero")
    }
});

//OBTENER TODOS LOS DATOS DE LOS PROFESORES

let sql= 'SELECT * FROM work.teacher';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Se colocaron las notas a cero")
    }
});