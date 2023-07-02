function procesarRespuestas() {
    let total = 5;
    let puntos = 0;
    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["opcion1", "opcion2", "opcion1", "opcion1", "opcion1"];
    
    for (let i = 1; i <= total; i++) {
      if (myForm["pregunta" + i].value == null ||
          myForm["pregunta" + i].value == '') {
        alert('Favor responder todas las preguntas');
        return false;
      } else {
        if (myForm["pregunta" + i].value === respuestasCorrectas[i - 1])
          puntos++;
      }
    }
  
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Obtuviste ' + puntos + ' puntos de ' + total + ' posibles';
    return false;
  }