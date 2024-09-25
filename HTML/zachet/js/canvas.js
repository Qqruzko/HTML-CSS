window.onload = (function(){
    "use strict";

    const canvas = document.getElementById('canv');
    const cntxt = canvas.getContext('2d');

    const gradient = cntxt.createLinearGradient(0, 0, canvas.width, canvas.height);

    gradient.addColorStop(0, 'black'); 
    gradient.addColorStop(0.5, 'red');  
    gradient.addColorStop(1, 'green');  


    cntxt.fillStyle = gradient;
    cntxt.fillRect(0, 0, canvas.width, canvas.height);

    const supportMessage = document.getElementById('msg');
    if (Modernizr.canvas) {
        supportMessage.innerHTML = "<div id='msg' id='supportMessage'>Есть поддержка элемента canvas</div>";
    } 
    else {
        supportMessage.innerHTML = "<div id='msg' id='supportMessage'>Нет поддержки элемента canvas</div>";
    }
});