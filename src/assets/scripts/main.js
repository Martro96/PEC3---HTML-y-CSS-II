/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
/*import 'bootstrap';
import * as bootstrap from 'bootstrap';*/
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


/****MENÚ HAMBURGUESA******/
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("main-nav--visible"); 
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("main-nav--visible"); 
    });
});

/***CURRENT PAGE***/
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos la URL de la página actual
    const currentUrl = window.location.href;
    
    // Obtenemos todas las etiquetas <a> dentro de la lista de navegación
    const navLinks = document.querySelectorAll(".main-nav__link");

    // Iteramos sobre cada enlace
    navLinks.forEach(function(link) {
        // Verificamos si la URL del enlace coincide con la URL de la página actual
        if (link.href === currentUrl) {
            // Agregamos la clase "current-page" a la etiqueta <li> padre del enlace
            link.parentNode.classList.add("current-page");
        }
    });
});

document.querySelectorAll('input, select, textarea').forEach(function(campo) {
    campo.addEventListener('input', function() {
      if (!campo.checkValidity()) {
        campo.classList.add('border-red-600');
        campo.nextElementSibling.classList.remove('hidden');
      } else {
        campo.classList.remove('border-red-600');
        campo.nextElementSibling.classList.add('hidden');
      }
    });
  });
