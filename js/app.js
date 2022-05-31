


$(window).scroll(function(){
    let pixel    = $(window).scrollTop()
    let altoV    = $(window).height()
    let distCaja = $('.works__section').offset().top

    if ( pixel >= distCaja - (altoV / 2) ){

        $('.works__section').addClass('activo')
    }
})


$('.amarillo__dato.about').click(function(){
    $('.amarillo__bloque.works').removeClass('activo')
    $('.amarillo__bloque.about').addClass('activo')
})
$('.amarillo__dato.works').click(function(){
    $('.amarillo__bloque.about').removeClass('activo')
    $('.amarillo__bloque.works').addClass('activo')
})


