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

let sql =  `SELECT first_name, last_name, title FROM teacher JOIN
            subject_teacher ON (teacher.id_teacher = subject_teacher.id_teacher) JOIN
            subject ON (subject_teacher.id_subject = subject.id_subject)`

connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Nombre, Apellidos y asignatura impartida por profesor")
    }
});