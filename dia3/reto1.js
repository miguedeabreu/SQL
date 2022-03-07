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

let sql =  `SELECT first_name1, last_name1, title FROM student JOIN
            grupo ON (student.id_group = grupo.id_group) JOIN
            subject_teacher ON (grupo.id_group = subject_teacher.id_group) JOIN
            subject ON (subject_teacher.id_subject = subject.id_subject)`

connection.query(sql, function(err, res){
    if (err){
    console.log(err);
} else {
    console.log("Nombre, Apellidos y asignatura por alumno")
        }
});