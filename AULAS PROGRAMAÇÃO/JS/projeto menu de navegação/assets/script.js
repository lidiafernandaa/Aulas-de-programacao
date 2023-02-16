
function menu() {
    let menuArea = document.querySelector('#menu-area');
    
    // if(menuArea.classList.contains('nova') === true) {
    //     menuArea.classList.remove('nova'); 
    // } else {
    //     menuArea.classList.add('nova');
    // }

    if(menuArea.style.width === '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }
}
