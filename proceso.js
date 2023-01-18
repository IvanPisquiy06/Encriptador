
function encript(){
    var texto = document.getElementById("mensaje").value;
    texto = texto.toLowerCase();
    var respuesta = document.getElementById("resultado");


    let palabras = texto.split(" ");
    let letras;
    var resultado = '';

    for(var i = 0; i < palabras.length; i++ ){
        letras = palabras[i].split('');
        for(var j = 0; j < letras.length; j++){
            if (letras[j] == 'a'){
                letras[j] = "ai";
            } else if (letras[j] == 'e'){
                letras[j] = "enter";
            } else if (letras[j] == 'i'){
                letras[j] = "imes";
            } else if (letras[j] == 'o'){
                letras[j] = "ober";
            } else if (letras[j] == 'u'){
                letras[j] = "ufat";
            }
            resultado = resultado+letras[j];
        }
        resultado = resultado + " "; 
    }
    
    respuesta.textContent = resultado
}

function desencrypt(){
    var texto = document.getElementById("mensaje").value;
    texto = texto.toLowerCase();
    var respuesta = document.getElementById("resultado");

    let palabras = texto.split(" ");
    let letras;
    var resultado = '';

    for(var i = 0; i < palabras.length; i++ ){
        letras = palabras[i].split('');
        for(var j = 0; j < letras.length; j++){
            if (letras[j] == 'a'){
                letras.splice(j+1,1);
            } else if (letras[j] == 'e'){
                letras.splice(j+1,4);
            } else if (letras[j] == 'i'){
                letras.splice(j+1,3);
            } else if (letras[j] == 'o'){
                letras.splice(j+1,3);
            } else if (letras[j] == 'u'){
                letras.splice(j+1,3);
            }
            resultado = resultado+letras[j];
        }
        resultado = resultado + " "; 
    }
    
    respuesta.textContent = resultado

}

function copy(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }