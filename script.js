function animar(id, objetivo){
    let numero = 0;
    let intervalo = setInterval(() => {
        numero++;
        document.getElementById(id).textContent = numero;

        if(numero >= objetivo){
            clearInterval(intervalo);
        }
    }, 20);
}

animar("contador1", 250);
animar("contador2", 13);
animar("contador3", 9);

function mensaje(){
    alert("Encuesta enviada correctamente");
}

function subir(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}