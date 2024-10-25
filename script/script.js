const display = document.querySelector("#display");
let cuadro = document.createElement("div");
const selecionarColorInput = document.querySelector("#seleccionar-color");
let colorSeleccionado = "#000";
const tamanoCuadricula = document.querySelector("#tamano-cuadricula");
let tamanoSeleccionado;
const borrador = document.querySelector("#borrador");
const reinicarCuadricula = document.querySelector("#borrar-cuadricula");
const botonAleatorio = document.querySelector("#boton-aleatorio");
let modoAleatorio = false;
const modoNormal = document.querySelector("#boton-normal")

// Función cuadricula 
const crearCuadricula = (tamano) => {
    for(let i = 0; i < tamano*tamano; i++) {
        cuadro = document.createElement("div");
        display.appendChild(cuadro);
        cuadro.classList.add("cuadro");
        cuadro.style.width = `calc(500px / ${tamano})`; // Determina el ancho y el alto de cada cuadro de la cudricula
        cuadro.style.height = `calc(500px / ${tamano})`;

        cuadro.addEventListener("mouseover", (e) => { 
            const generarLetra = () => {
                let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
                let numero = (Math.random()*15).toFixed(0);
                return letras[numero];
            }
            
            const generarColor = () => {
                let color = "";
                for (let i = 0; i < 6; i++) {
                    color += generarLetra();
                }
                return "#" + color;
            }

            if (modoAleatorio === true) {
                e.target.style.background = generarColor();
            } else {
                e.target.style.background = `${colorSeleccionado}`;
            }
        });
    }    
}

// Crear cuadricula por primera vez
crearCuadricula(16);

// Seleccioanr Color
selecionarColorInput.addEventListener("change", (e) => {
    colorSeleccionado = e.target.value;
    
});
// Seleccionar Tamaño de la cuadricula
tamanoCuadricula.addEventListener("change", (e) => {
    tamanoSeleccionado = e.target.value;
    display.innerHTML = ""
    crearCuadricula(+tamanoSeleccionado);
});

// Borrador cuadricula
borrador.addEventListener("click", () => {
    colorSeleccionado = "#fff";
});

// Reiniciar Cuadricula 
reinicarCuadricula.addEventListener("click", () => {
    display.innerHTML = "";
    colorSeleccionado = "#000";
    crearCuadricula(16);
});

// Boton arcoiris
botonAleatorio.addEventListener("click", () => {
    modoAleatorio = true;
})
// Boton normal
modoNormal.addEventListener("click", () => {
    modoAleatorio = false;
    colorSeleccionado = "#000"; 
})