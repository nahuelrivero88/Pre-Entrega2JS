let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", validarForm);

let eventoValidado = false;

function validarForm(evento) {
    evento.preventDefault();
    const nombre = document.getElementById("nombre");
    const fecha = document.getElementById("fecha");
    const horario = document.getElementById("horario");
    const deporte = document.getElementById("deporte");

    if (nombre.value == "") {
        alert("Ingrese un nombre por favor");
        return;
    }
    if (fecha.value == "") {
        alert("Ingrese una fecha por favor");
        return;
    }
    if (horario.value == "") {
        alert("Ingrese un horario por favor");
        return;
    }
    if (deporte.value == 0 && (parseInt(horario.value) < 8 || parseInt(horario.value) > 11)) {
        alert("Ese horario no esta disponible. \nHorario disponible: De 8:00 a 12:00");
        return;
    }
    if (deporte.value == 1 && (parseInt(horario.value) < 10 || parseInt(horario.value) > 16)) {
        alert("Ese horario no esta disponible. \nHorario disponible: De 10:00 a 17:00");
        return;
    }
    if (deporte.value == 2 && (parseInt(horario.value) < 13 || parseInt(horario.value) > 17)) {
        alert("Ese horario no esta disponible. \nHorario disponible: De 13:00 a 18:00");
        return;
    }
    if (deporte.value == 3 && (parseInt(horario.value) < 19 || parseInt(horario.value) > 21)) {
        alert("Ese horario no esta disponible. \nHorario disponible: De 19:00 a 22:00");
        return;
    }
    else {
        eventoValidado = true;
        alert("Su horario quedo agendado correctamente. \nNombre: " + nombre.value + "\nFecha: " + fecha.value + "\nHorario: " + horario.value);
    }
    // JSON
    const agenda1 = {
        cliente: nombre.value,
        fechaAgendada: fecha.value,
        horaAgendada: horario.value,
    };
    const enJSON = JSON.stringify(agenda1);
    if (eventoValidado == true) {
        console.log(enJSON);
        localStorage.setItem("agenda1", enJSON);
    } else {
        console.log("Ingreso algun dato erroneo o no habia horario.");
    }
}

// Evento Onchange
let input1 = document.getElementById("nombre");
let input2 = document.getElementById("deporte");
let input3 = document.getElementById("fecha");
let input4 = document.getElementById("horario");

input1.onchange = () => { console.log("Se ingreso un nombre") };
input2.onchange = () => { console.log("Se ingreso un deporte") };
input3.onchange = () => { console.log("Se ingreso una fecha") };
input4.onchange = () => { console.log("Se ingreso un horario") };



// Codig JS para desafio clase 13

// Boton para mostrar deportes
$('#listaDeportes').fadeIn('slow');
$('#listaDeportes').fadeOut(1500);

let tocaBoton = false;
 $('#botonDeportes').click(() => {
     if( tocaBoton )
         $('#listaDeportes').slideDown();
     else
         $('#listaDeportes').slideUp();
     tocaBoton = !tocaBoton;
 });

 // Titulo dinamico
 desaparecer();
 
 function desaparecer() {
     $('#tituloTilteado').fadeOut(1500, function() {
         aparecer();
     });
 }
 function aparecer() {
     $('#tituloTilteado').fadeIn(1500, function() {
         desaparecer();
     });
 }