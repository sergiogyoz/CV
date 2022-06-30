function con_nombre(nuevo_titulo){
    let title_element=document.getElementById("titulo")
    title_element.textContent= nuevo_titulo
}


let como_variable = function (nuevo_titulo){
    let title_element=document.getElementById("titulo")
    title_element.textContent= nuevo_titulo
}


//funcion aux que usa a otra funcion
function llama_otra_funcion(func,param_texto){
    func(param_texto)
}

//  Anonima
//usando funcion anonima
llama_otra_funcion(
    function(texto){
    let title_element=document.getElementById("titulo")
    title_element.textContent= texto
    },
    "Tengo la garganta seca")


//  Abreviacion de flecha de una funcion anonima
//usando funcion flecha
 llama_otra_funcion(
    texto => document.getElementById("titulo").textContent= texto,
    "tengo la garganta seca")
