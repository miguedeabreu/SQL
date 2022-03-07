class Student
{
    constructor(first_name1, last_name1, id_group, ingreso, id_student)
    {
        this.first_name1    = first_name1;
        this.last_name1     = last_name1;
        this.id_group       = id_group;
        this.ingreso        = ingreso;
        this.id_student     = id_student;
    }
}

class Mark 
{ 
    constructor(id_student, id_subject, date, mark, id_student2)
    {
        this.id_student  = id_student;
        this.id_subject  = id_subject;
        this.date        = date;
        this.mark        = mark;
        this.id_student2 = id_student2;
    }

}

function getStudent()
{   
    let url = "http://localhost:3000/student";
    let id = document.getElementById("id_student").value
    let final = document.getElementById("final")

    if (id != "") {
        url += `?i=${id}`
    }
    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        // console.log(result);

         if (id === ""){

            for (let id = 0 ; id < result.length ; id++) {
                
                final.innerHTML += `<p><div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title"><p></p>Datos del alumno:</h5>
                    <p class="card-text">Nombre: ${result[id].first_name1}</p>
                    <p class="card-text">Apellido: ${result[id].last_name1}</p>
                    <p class="card-text">Grupo/Sección: ${result[id].id_group}</p>
                    <p class="card-text">Fecha de ingreso: ${result[id].ingreso.substring(0,10)}</p>
                </div>
                </div></p>`
            }
        } else {
            if (result.length < id) {
                showToast("ID: " + id +  " no existe", "bg-danger")
            } else {
                // console.log(result[id])
                final.innerHTML = `<p><div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title"><p></p>Datos del alumno:</h5>
                    <p class="card-text">Nombre: ${result[id].first_name1}</p>
                    <p class="card-text">Apellido: ${result[id].last_name1}</p>
                    <p class="card-text">Grupo/Sección: ${result[id].id_group}</p>
                    <p class="card-text">Fecha de ingreso: ${result[id].ingreso.substring(0,10)}</p>
                </div>
                </div></p>`
            }
        }
    })
    .catch(function(error)
    {
        console.log(error)
    })
    final.innerHTML = "";
}

function postStudent()
{

    let student = new Student  (document.getElementById("first_name1").value,
                                document.getElementById("last_name1").value,
                                document.getElementById("id_group").value,
                                document.getElementById("ingreso").value)
    
    const url = "http://localhost:3000/student";

    if (validar(student))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(student),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result == "-1")
                showToast("ERROR: Error al insertar el dato" , "bg-danger")
            else
                showToast("Usuario creado con id: " + result, "bg-success")

            console.log(result)
        })
        .catch(function(error)
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

function putStudent()
{
    let student = new Student  (document.getElementById("first_name1").value,
                                document.getElementById("last_name1").value,
                                Number(document.getElementById("id_group").value),
                                document.getElementById("ingreso").value,
                                Number(document.getElementById("id_student").value))
    
    const url = "http://localhost:3000/student";

    if (validarPut(student))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(student),
                method: "PUT"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result == "-1")
                showToast("ERROR: Error al insertar el dato" , "bg-danger")
            else
                showToast("Usuario actualizado", "bg-success")
        })
        .catch(function(error)
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

function deleteStudent() {
    let id = document.getElementById("id_student").value;

    if (id != ""){

        id= Number(id);
        let student = new Student ("","","","",id)
        
        const url = "http://localhost:3000/student";

        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(student),
                method: "DELETE"
            }
    
        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (!result.error){
                showToast("Usuario eliminado correctamente", "bg-success")
            }   
            else{
                showToast("El ID no existe", "bg-danger")
            }    
        })
        .catch(function(error)
        {
            console.log(error)
        })
    } 
    else {
        showToast("Introduce un ID", "bg-danger")
    }
}

function validar(student)
{
    resultado = false
    if (student.first_name1 == "" || student.first_name1 == "null")
    {
        showToast("AVISO: Campo nombre no informado", "bg-warning")
    }
    else if (student.last_name1 == "" || student.last_name1 == "null")
    {
        showToast("AVISO: Campo apellido no informado", "bg-warning")
    }
    else if (student.id_group == "" || student.id_group == "null")
    {
        showToast("AVISO: Campo grupo no informado", "bg-warning")
    }
    else if (student.ingreso == "" || student.ingreso == "null")
    {
        showToast("AVISO: Campo fecha de ingreso no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

function validarPut(student)
{
    resultado = false
    if (student.id_student == "" || student.id_student == "null")
    {
        showToast("AVISO: Debe introducir un ID", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

//MARKS

function getMark()
{   
    let url = "http://localhost:3000/mark";
    let id = document.getElementById("id_student1").value
    let final = document.getElementById("final")

    if (id != "") {
        url += `?id=${id}`
    }
    
    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {    
        console.log(result);

        for (let id = 0 ; id < result.length ; id++) {
                
            final.innerHTML += `<p><div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                                <div class="card-header"></div>
                                    <div class="card-body">
                                    <h5 class="card-title"><p></p>Notas del alumno:</h5>
                                    <p class="card-text">ID de estudiante: ${result[id].id_student}</p>
                                    <p class="card-text">ID de asignatura: ${result[id].id_subject}</p>
                                    <p class="card-text">Nota: ${result[id].mark}</p>
                                </div>
                                </div></p>`
        }
        
    })
    .catch(function(error)
    {
        console.log(error)
    })
    final.innerHTML = "";
}

function postMark()
{
    let mark = new Mark (document.getElementById("id_student").value,
                        document.getElementById("id_subject").value,
                        document.getElementById("date").value,
                        document.getElementById("mark").value)
    
    const url = "http://localhost:3000/mark";

    if (validar(mark))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(mark),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result == "-1")
                showToast("ERROR: Error al insertar el dato" , "bg-danger")
            else
                showToast("Nota creada con id: " + result, "bg-success")

            console.log(result)
        })
        .catch(function(error)
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

function putMark()
{
    let mark = new Mark (document.getElementById("id_student").value,
                        document.getElementById("id_subject").value,
                        document.getElementById("date").value,
                        document.getElementById("mark").value,
                        Number(document.getElementById("id_mark").value))
    
    const url = "http://localhost:3000/mark";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(mark),
        method: "PUT"
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {
        if (result == "-1")
            showToast("ERROR: Error al insertar el dato" , "bg-danger")
        else
            showToast("Nota actualizada", "bg-success")
    })
    .catch(function(error)
    {
        showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
        console.log(error)
    })
}


function validar(mark)
{
    resultado = false
    if (mark.id_student == "" || mark.id_student == "null")
    {
        showToast("AVISO: ID del alumno no informado", "bg-warning")
    }
    else if (mark.id_subject == "" || mark.id_subject == "null")
    {
        showToast("AVISO: ID de la asignatura no informado", "bg-warning")
    }
    else if (mark.date == "" || mark.date == "null")
    {
        showToast("AVISO: Campo fecha no informado", "bg-warning")
    }
    else if (mark.mark == "" || mark.mark == "null")
    {
        showToast("AVISO: Campo nota no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}