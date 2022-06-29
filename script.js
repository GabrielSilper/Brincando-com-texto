var tamanhoFonte = 50;
var titulo = document.getElementsByClassName("principalTitle");

function loaded(){
    titulo[0].style.fontSize = tamanhoFonte +"px";
    let elementoIn = document.getElementById("in");
    let elementoOff = document.getElementById("off");
    elementoIn.onclick = aumentaTexto;
    elementoOff.onclick = diminuiTexto;
    
}

function mudaCor (){
    let elemento = document.getElementsByClassName("principalTitle");
    if (elemento[0].style.color == "red"){
        elemento[0].style.color = "green";
    }else if(elemento[0].style.color == "green"){
        elemento[0].style.color = "blue";
    }else{
        elemento[0].style.color = "red";
    }
}

function mudaBackground (){
    let elemento = document.getElementsByClassName("principalTitle");
    if (elemento[0].style.backgroundColor =="pink"){
        elemento[0].style.backgroundColor = "purple";
    }else if(elemento[0].style.backgroundColor == "purple"){
        elemento[0].style.backgroundColor = "black";
    }else{
        elemento[0].style.backgroundColor = "pink";
    }
}

function mudaTexto(){
    let elemento = document.getElementsByClassName("principalTitle");
    let elementoRec = document.getElementsByClassName("textMudarTexto");
    if (elementoRec[0].value == ""){

    }else{
        elemento[0].innerText = elementoRec[0].value;
        elementoRec[0].value = "";
    }
}

function aumentaTexto(){
    let elemento = document.getElementsByClassName("principalTitle");
    tamanhoFonte +=2;
    elemento[0].style.fontSize = tamanhoFonte+"px";
}

function diminuiTexto(){
    let elemento = document.getElementsByClassName("principalTitle");
    tamanhoFonte -=2;
    elemento[0].style.fontSize = tamanhoFonte+"px";
}