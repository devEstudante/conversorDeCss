var input = document.getElementById("input")
var resultado = document.getElementById("res")
var px = 16 

function teste() {
    var receiveInput = input.value

    if(!receiveInput) {
        window.alert('Impossível calcular, digite um número por favor.')
    } else{
        var converter = parseFloat(receiveInput)

        resultado.innerHTML = (`O valor de ${converter} rem é equivalente á ${ converter * px} px`)
    } 
}