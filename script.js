const certificaciones = ["Tecnologo en electronica Industrial (Universidad ECCI)", "Técnico en Desarrollo de las Operaciones Logisticas en la Cadena de Abastecimiento (SENA)"];

function mostrarCertificaciones() {
  let ul = document.getElementById("listaCertificaciones");

  for (let i = 0; i < certificaciones.length; i++) {
    let li = document.createElement("li");
    li.textContent = certificaciones[i];
    ul.appendChild(li);
  }
}
window.onload = mostrarCertificaciones;
function mostrarProyectosAnteriores() {
    const cantidadProyectos = prompt(
      "Ingrese la cantidad de proyectos que desea ver:"
    );
  
    const cantidadProyectosNum = parseInt(cantidadProyectos);
  
    if (!isNaN(cantidadProyectosNum) && cantidadProyectosNum > 0) {
      const proyectos = [
        "ITS InfoCom",
        "Globalem S.A.S",
        "Mision Temporal",
      ];
  
      let proyectosAMostrar =
        cantidadProyectosNum < proyectos.length
          ? cantidadProyectosNum
          : proyectos.length;
  
      for (let i = 0; i < proyectosAMostrar; i++) {
        alert("Proyecto: " + proyectos[i]);
      }
    } else {
      alert("Por favor, ingrese un número válido mayor que cero.");
    }
  }
  
  document
    .getElementById("verProyectosBtn")
    .addEventListener("click", mostrarProyectosAnteriores);

document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList'); // Suponiendo que tienes un <ul id="skillsList"> para tus habilidades
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});



  function saludoPersonalizado() {
    alert("¡Gracias por visitar mi Hoja de vida!");
}

const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}

document.getElementById('saludoBtn').addEventListener('click', saludoPersonalizado);
document.getElementById('calificacionBtn').addEventListener('click', calificarHojaDeVida);


function toggleAccordion(sectionId) {
  var content = document.getElementById(sectionId);
  content.classList.toggle("active");
}
