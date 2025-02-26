
function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;

    if (texto.trim() !== "") {  
        var parrafo = document.createElement("p");
        parrafo.textContent = texto;
        contenido.appendChild(parrafo);

        document.getElementById("texto").value = "";
    }
}

document.getElementById('imagen').onchange = function(evt) {
    var entradaArchivo = evt.target.files;

    if (entradaArchivo.length) {
        var imagen = new FileReader();
        imagen.onload = function() {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.src = imagen.result;
            etiquetaImg.width = 300;
            etiquetaImg.height = 200;
            
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        };
        imagen.readAsDataURL(entradaArchivo[0]);
    }
    
};


function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;

    if (texto.trim() !== "") {  
        var parrafo = document.createElement("p");
        parrafo.textContent = texto;
        contenido.appendChild(parrafo);

        document.getElementById("texto").value = "";
    }
}


document.getElementById('imagen').onchange = function(evt) {
    var entradaArchivo = evt.target.files;

    if (entradaArchivo.length) {
        var imagen = new FileReader();
        imagen.onload = function() {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.src = imagen.result;
            etiquetaImg.width = 300;
            etiquetaImg.height = 200;
            
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        };
        imagen.readAsDataURL(entradaArchivo[0]);
    }
    
};


function nuevoEnlace() {
    var url = prompt("Introduce la URL del enlace:");
    var texto = prompt("Introduce el texto del enlace:");

    if (url && texto) {
        var enlace = document.createElement("a");
        enlace.href = url;
        enlace.textContent = texto;
        enlace.target = "_blank"; 
        enlace.classList.add("d-block", "mt-2");

        document.getElementById('contenido').appendChild(enlace);
    }
}


function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var ventana = window.open('', '', 'height=600, width=800');

    ventana.document.write(`
        <html>
        <head>
            <title>Impresión</title>
            <link rel="stylesheet" href="https://bootswatch.com/5/vapor/bootstrap.min.css">
        </head>
        <body class="container mt-4">
            <h1 class="text-center">Contenido Impreso</h1>
            <div>${divContents}</div>
        </body>
        </html>
    `);

    ventana.document.close();
    ventana.print();
}

