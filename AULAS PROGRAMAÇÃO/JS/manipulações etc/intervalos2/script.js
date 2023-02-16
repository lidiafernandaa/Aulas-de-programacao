let timer; 
function rodar() {
   timer = setTimeout(function() {
      let d = new Date(); 
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      let txt = `${h}:${m}:${s}`; 
      document.querySelector('.demo').innerHTML = txt;  
    }, 2000);
}

function parar() {
    clearTimeout(timer);
}