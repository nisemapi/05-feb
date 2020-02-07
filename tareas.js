// function crearTarea() {
//     let tarea = document.createElement("input");
//     let chulo = document.createElement("input");
//     tarea.setAttribute("type","checkbox");
//     chulo.setAttribute("type", "text");
//     document.getElementById("caja-tareas").appendChild(tarea);
//     document.getElementById("caja-tareas").appendChild(chulo);
    
// }

let pendientes = [];
function crearTarea() {
    pendientes.push(document.getElementById("nueva").value);
    document.createElement("p");
    document.createTextNode(pendientes).value;
    
    //para mostrar el array, después de buscar en google:
    lista.innerHTML = JSON.stringify(pendientes);
    
    //para mostrar el array, según el profesor:
    // let newDiv=document.createElement("div");
    // let newContent=document.createTextNode(pendientes);
    // newDiv.appendChild(newContent);
    // let currentDiv = document.getElementById("caja-tareas");
    // document.body.appendChild(newDiv, currentDiv)   ;
    //revisar para mejorar el codigo anterior: appendChild, removeChild en w3schools
}
function eliminarTarea() {
    pendientes.pop();
    lista.innerHTML = JSON.stringify(pendientes);

}
