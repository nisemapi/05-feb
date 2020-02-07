let usuario = {
    nombre: "Steven",
    apellido: "Pinker",
    tel: "23103",
    dir: "Av Caracas - 1234",
    profesion: "Psicólogo",
    edad: "50"
}
document.getElementById("mostrar").innerHTML = usuario.nombre + " " + usuario.apellido + " tiene " + usuario.edad + " años y trabaja como " + usuario.profesion;