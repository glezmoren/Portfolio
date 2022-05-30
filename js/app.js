


// $(window).scroll(function(){
//     let pixel    = $(window).scrollTop()
//     let altoV    = $(window).height()
//     let distCaja = $('.works__section').offset().top

//     if ( pixel >= distCaja - (altoV / 2) ){

//         $('.works__section').addClass('activo')
//     }
// }


$('.amarillo__dato about').click(function(){
    $('.amarillo_bloque works').addclass('oculto')
    $('.amarillo_bloque about').addclass('activo')
})

