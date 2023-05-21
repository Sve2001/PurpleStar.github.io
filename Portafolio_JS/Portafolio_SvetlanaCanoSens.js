//Ampliar las 4 imagenes
const amplearLasImagenes = document.querySelector('.amplearImagen');

amplearLasImagenes.addEventListener('mouseenter', () => {
    amplearLasImagenes.classList.add('animacion');
});

amplearLasImagenes.addEventListener('mouseleave', () => {
    amplearLasImagenes.classList.remove('animacion');
});

//Ventana Emergente Imagen de Ilustraciones
//abrir La Ventana Emergente
function abirVentanaEmergenteIlustraciones(imagen, texto) {
    document.getElementById('imagenEnMuestra').src = imagen;
    document.getElementById('textoEnMuestra').textContent = texto;
    document.getElementById('imagenEnVentanaEmergente').style.display = "block";
}

//Cerrar la Ventana Emergente
function cerrarVentanaEmergenteIlustraciones() {
    document.getElementById('imagenEnVentanaEmergente').style.display = "none"
}

//Ventana Emergente Imagen de ConcepArt
//abrir La Ventana Emergente
function abirVentanaEmergenteConcepArt(imagen, texto) {
    document.getElementById('imagenEnMuestraConcepArt').src = imagen;
    document.getElementById('textoEnMuestraConcepArt').textContent = texto;
    document.getElementById('imagenEnVentanaEmergenteConcepArt').style.display = "block";
}

//Cerrar la Ventana Emergente
function cerrarVentanaEmergenteConcepArt() {
    document.getElementById('imagenEnVentanaEmergenteConcepArt').style.display = "none";
}

//Ventana Emergente Imagen de PixelArt
//abrir La Ventana Emergente
function abirVentanaEmergentePixelArt(imagen, texto) {
    document.getElementById('imagenEnMuestraPixelAr').src = imagen;
    document.getElementById('textoEnMuestraPixelAr').textContent = texto;
    document.getElementById('imagenEnVentanaEmergentePixelArt').style.display = "block";
}

//Cerrar la Ventana Emergente
function cerrarVentanaEmergentePixelArt() {
    document.getElementById('imagenEnVentanaEmergentePixelArt').style.display = "none";
}