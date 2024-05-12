let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 8;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for (var i = currentItem; i < currentItem + 4; i++) {
        boxes[i].computedStyleMap.display = 'inline-block';
}

currentItem += 4;
if(currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none'
}

}

//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vacia-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento() {
    // Lógica para agregar un elemento al carrito
}

function eliminarElemento() {
    // Lógica para eliminar un elemento del carrito
}

function vaciarCarrito() {
    // Lógica para vaciar el carrito

    // Define un array para almacenar los productos en el carrito
let carritoProductos = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
    const producto = {
        id: id,
        nombre: nombre,
        precio: precio
    };
    carritoProductos.push(producto);
}

// Función para eliminar un producto del carrito por su ID
function eliminarDelCarrito(id) {
    carritoProductos = carritoProductos.filter(producto => producto.id !== id);
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carritoProductos = [];
}

// Función para imprimir los productos del carrito en la consola (para propósitos de demostración)
function imprimirCarrito() {
    console.log("Productos en el carrito:");
    carritoProductos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
    });
}

// Actualiza la función comprarElemento para agregar el producto al carrito
function comprarElemento(event) {
    const elemento = event.target;
    const id = elemento.getAttribute('data-id');
    const nombre = elemento.getAttribute('data-nombre');
    const precio = parseFloat(elemento.getAttribute('data-precio'));

    agregarAlCarrito(id, nombre, precio);
    imprimirCarrito(); // Para demostración, imprime el carrito en la consola
}

// Actualiza la función eliminarElemento para eliminar el producto del carrito
function eliminarElemento(event) {
    const elemento = event.target;
    const id = elemento.getAttribute('data-id');
    eliminarDelCarrito(id);
    imprimirCarrito(); // Para demostración, imprime el carrito en la consola
}

// Asocia los eventos a los elementos del DOM
function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Llama a la función para asociar los eventos al cargar la página
cargarEventListeners();
}