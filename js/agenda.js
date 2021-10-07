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


// Codig JS para desafio clase 13


const listaDeportes = [
    { deporte: "Futbol", profesor: "Matias", horario: "Matutino" },
    { deporte: "Basketball", profesor: "Mateo", horario: "Matutino y Vespertino" },
    { deporte: "Volleyball", profesor: "Juan", horario: "Vespertino" },
    { deporte: "Libre", profesor: "Mario", horario: "Nocturno" }
];

//Agrego nombre de los deporte abajo del icono
$('.deporteFutbol').append(`<h2 class="nombreDeporte">Futbol</h2>`);
$('.deporteBask').append(`<h2 class="nombreDeporte">Basketball</h2>`);
$('.deporteVoll').append(`<h2 class="nombreDeporte">Volleyball</h2>`);
$('.deporteLibre').append(`<h2 class="nombreDeporte">Libre</h2>`);

// Filtro
function filtrarDeporte(deporteFiltrado) {
    let divDeportes = $("#deportes");
    divDeportes.html("");
    for (const listaDeporte of deporteFiltrado) {

        divDeportes.append(`
            <div>
                <h4> Deporte: ${listaDeporte.deporte} </h5>
                <hr>
                <b>  Profesor: ${listaDeporte.profesor} </b>
                <hr>
                <b>  Horario: ${listaDeporte.horario} </b>
            </div>
        `);
    }
}
//Función click al nombre del deporte
$(".nombreDeporte").click(function () {
    let deporte = $(this).html();
    let deporteFiltrado = listaDeportes.filter(p => p.deporte === deporte);

    filtrarDeporte(deporteFiltrado);
})