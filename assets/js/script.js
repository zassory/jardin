
let agregar = document.getElementById("txtAgregar");
let eliminar = document.getElementById("txtEliminar");

let btnAgregar = document.getElementById("btnAgregar");
let btnEliminar = document.getElementById("btnEliminar");
let p1 = document.getElementById("p1");

let ver = document.getElementById("ver");

let nombresArray = [];

btnAgregar.addEventListener("click", function(){
    let nombre = document.getElementById("txtAgregar").value;    
    nombre === "" ? alert("Debe ingresar algun nombre") : nombresArray.push(nombre);    
    p1.innerHTML = nombresArray;
});

btnEliminar.addEventListener("click", function(){    
    let nombre = document.getElementById("txtEliminar").value;
    if(nombre === ""){
        alert("Debe ingresar algún nombre");
    }else{
        let acierto = nombresArray.indexOf(nombre);
        console.log(acierto);
        if(acierto !== -1){
            console.log('No esta en el arreglo');
        }
    }
});

function mostrarDatos(){
    p1.innerHTML = "";
    for(let i = 0; i < nombresArray.length;i++){
         return nombresArray[i];
     }
}
