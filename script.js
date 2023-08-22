document.addEventListener('keydown', function(event) {
    // Obtener la tecla presionada
    var key = event.keyCode;
console.log(key)
    // Realizar una acción basada en la tecla presionada
    switch (key) {
    case 49: // Tecla uno
        console.log('Se presionó el numero uno');
        break;
    case 50: // Tecla dos
        console.log('Se presionó el numero dos');
        break;
    case 51: // Tecla tres
        console.log('Se presionó el numero tres');
        break;
    case 52: // Tecla cuatro
        console.log('Se presionó el numero cuatro');
        break;
        case 53: // Tecla cinco
        console.log('Se presionó el numero cinco');
        break;
    case 54: // Tecla seis
        console.log('Se presionó el numero seis');
        break;
    case 55: // Tecla siete
        console.log('Se presionó el numero siete');
        break;
    }
});