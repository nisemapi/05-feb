// con comillas especiales se pueden crear strings especiales para llamar variables dentro del string, agreegar saltos de línea, etc.´asdf´
//while es similar al for y do-while sisrve cuando se quiere correr la instrucción al menos una vez y luego preguntar si se repite.
function msg() {
    let str = document.getElementById("nombre").value;
    let n = str.includes(" ");
        if (n == false) {
            alert("El campo nombre requiere al menos dos palabras");
        }
    let email = document.getElementById("correo").value;
    let m = email.includes("."&& "@");
        if (m == false) {
            alert("Por favor ingresa un correo válido.");
        }
}