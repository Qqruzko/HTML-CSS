window.onload = (function(){
const supportMessage = document.getElementById('msg');
if (Modernizr.video) {
    supportMessage.innerHTML = "<div id='msg' id='supportMessage'>Есть встроенная поддержкаHTML5-видео</div>";
    if (Modernizr.video.webm) {
        // Попробуем WebM
        supportMessage.innerHTML = "<div id='msg' id='supportMessage'>Есть встроенная поддержка видеоформата WebM</div>";
    } 
    if (Modernizr.video.ogg) {
        // Попробуем Ogg Theora + Vorbis в контейнере Ogg
        supportMessage.innerHTML = "<div id='msg' id='supportMessage'>Есть встроенная поддержка видеоформата Ogg Theora + Vorbis</div>";
    } 
    if (Modernizr.video.h264){
        // Попробуем H.264 + AAC в контейнере MP4
        supportMessage.innerHTML = "<div id='msg' id='supportMessage'>Есть встроенная поддержка видеоформата H.264 + AAC</div>";
        document.write("Есть встроенная поддержка видеоформата <b>H.264 + AAC</b><br><br>");
    } 
} 
});