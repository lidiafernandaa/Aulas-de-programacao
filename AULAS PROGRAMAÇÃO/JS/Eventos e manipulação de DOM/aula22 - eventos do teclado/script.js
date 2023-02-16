
function soltou(event) {
    console.log("Tecla apertada: " + event.code); 
    console.log('CTRL? ' + event.ctrlKey);
    console.log('SHIFT? ' + event.shiftKey);
    console.log('ALT? ' + event.altKey);
    console.log('--');
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou); 