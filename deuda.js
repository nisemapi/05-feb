listado = [];
let deuda = 0;
function calcular() {
    listado.push(document.getElementById("entrada").value);
    // let entrada = document.getElementById("caja-texto").nodeValue;
    historial.innerHTML = JSON.stringify(listado);
    let entra = document.getElementById("entrada").value;
    deuda = deuda + parseInt(entra);
    resultado.innerHTML = JSON.stringify(deuda);
}

//single page app spa 
//dom virtual
//READ ABOUT IT