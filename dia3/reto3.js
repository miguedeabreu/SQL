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

let sql =  `SELECT COUNT(*), title, first_name1, last_name1 FROM student JOIN
            grupo ON (student.id_group = grupo.id_group) JOIN
            subject_teacher ON (grupo.id_group = subject_teacher.id_group) JOIN
            subject ON (subject_teacher.id_subject = subject.id_subject) JOIN
            teacher ON (subject_teacher.id_teacher = teacher.id_teacher) 
            GROUP BY subject.title`

connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Nombre y Apellidos del profesor + Numero total por asignatura")
    }
});