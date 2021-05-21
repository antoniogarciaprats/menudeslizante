$(document).ready ( function ( ) {

    $("div.opcion_secundaria").hide();

    $("p.opcion_primaria").click( function() {
        $(this).next("div.opcion_secundaria").slideDown(300)
        .siblings("div.opcion_secundaria").slideUp("slow");
    });

});