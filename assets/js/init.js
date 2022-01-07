(async function (){
    let data = await fetch('data/animales.json')
    const data2 = await data.json()
    const animales =  data2.animales

    $('#animal').on('change', function(){
        // obtenga el valor del ption seleccionado
        const nombre_animal = $('#animal').val()

        const animal = animales.find(an =>an.name == nombre_animal)

        $('#preview').css('background-image',`url("assets/imgs/${animal.imagen}")`)

    })
    console.log(animales);

})()// iife(funciones inmediatamente ejecutable)

//elem => $('.personajes').append(`<img width="200" src="assets/imgs/${pj}/${elem}">`)
