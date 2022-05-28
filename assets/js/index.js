var $ = jQuery.noConflict();

$(document).ready(function($) {
    document.getElementById("tituloPrincipal").innerHTML = "MI WEB PERSONAL -- HTML CSS JAVASCRIPT";
});
$(window).load(function(){
    $("#loading-animation").delay(300);
    // Desaparece la animacion con un retardo de 200 ms
    $("#loading-animation").delay(200).fadeOut();
    // Desaparece el div con un retardo de 600 ms y de manera lenta
    $("#preloader").delay(600).fadeOut("slow");
});