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

//NOTA MEDIA DE LOS ALUMNOS DE LA ASIGNATURA 1

let sql="SELECT AVG(mark) FROM mark WHERE id_subject = 1";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("NOTA MEDIA DE LOS ALUMNOS DE LA ASIGNATURA 1")
    }
});

//NUMERO TOTAL DE ALUMNOS QUE HAY EN EL BOOTCAMP

let sql="SELECT COUNT(*) FROM student";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("NUMERO TOTAL DE ALUMNOS QUE HAY EN EL BOOTCAMP")
    }
});

//LISTAR TODOS LOS CAMPOS DE LA TABLA GROUP

let sql= "SELECT * FROM work.group";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("CAMPOS DE LA TABLA GROUP")
    }
});

//ELIMINAR NOTAS POR ENCIMA DE 5 Y QUE SEAN DEL AÑO 2021

let sql="DELETE FROM mark WHERE (mark > 5) AND (date < '2021-03-01')";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Notas eliminadas")
    }
});

//Datos de los estudiantes en el bootcamp en 2022

let sql='SELECT * FROM student WHERE ingreso BETWEEN "2022-01-01" AND "2022-03-01';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Datos de los estudiantes en el bootcamp en 2022")
    }
});

//NUMERO DE PROFESORES QUE HAY POR CADA ASIGNATURA

'INSERT INTO subject_teacher (id_subject, id_teacher, id_group) VALUES (1, 1, 1)';

let sql= "SELECT  id_teacher, COUNT(id_subject) FROM subject_teacher GROUP BY id_subject"
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("NUMERO DE PROFESORES QUE HAY POR CADA ASIGNATURA 1")
    }
});