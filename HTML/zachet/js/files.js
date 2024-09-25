(function () {
    document.addEventListener("DOMContentLoaded", function() {
    const supportMessage = document.getElementById('msg');
    if(window.File && window.FileReader && window.FileList) {
        supportMessage.innerHTML = "<div id='msg' id='supportMessage'>Есть встроенная поддержкаHTML5-загрузки файлов</div>";
    } else {
        supportMessage.innerHTML = "<div id='msg' id='supportMessage'>нет поддержки file API</div>";
    }

    function printFiles(e) {  
        const files = e.target.files;   // получаем все выбранные файлы  
        let output = "";
        for (let i = 0; i < files.length; i++) {        // Перебираем все выбранные файлы   
            const file = files[i];      // Получаем файл 
            console.log(file);
            output += "<li><p><strong>" + file.name + "</strong></p>";
            output += "<p>Type: " + file.type || "n/a</p>";
            output += "<p>Size: " + file.size + " bytes</p>";   
            output += "<p>Changed on: " +  file.lastModifiedDate.toLocaleDateString() + "</p></li>";  
        } 
        document.getElementById("list").innerHTML = "<ul>" + output + "</ul>";
    }
    document.getElementById("files").addEventListener("change", printFiles);
});
}());