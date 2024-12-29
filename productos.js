const productos = [
    {
        codigo: 1,
        nombre: "Carpa chica",
        imagen: "../img/carpaCeleste.jpg",
        capacidad: 2,
        altura: 120,
        ancho: 95,
        profundidad: 200, 
        peso: 2.1,  
        color: "Celeste",
        precio: 41000
        },
    {
        codigo: 2,
        nombre: "Carpa mediana",
        imagen: "../img/carpaChica.jpg",
        capacidad: 3,
        altura: 125,
        ancho: 150, 
        profundidad: 200,
        peso: 2.86,
        color: "Verde",
        precio: 41000
    },
    {
        codigo: 3,
        nombre: "Carpa grande",
        imagen: "../img/carpaGrande.jpg",
        capacidad: 5,
        altura: 155,
        ancho: 240,
        profundidad: 240,
        peso: 3.40,
        color: "Mostaza",
        precio: 41000
    },
    {
        codigo: 4,
        nombre: "Sillas plegables",
        imagen: "../img/sillasDeCamping.jpg",
        capacidad: 120,
        altura: 80,
        ancho: 50,
        profundidad: 50,
        peso: 1.8,
        color: "Verde",
        precio: 156154
    },
    {
        codigo: 5,
        nombre: "Anafe 1 hornalla",
        imagen: "../img/anafeNaranja.jpg",
        capacidad: 500,
        altura: 8.5,
        ancho: 33,
        profundidad: 33,
        peso: 1.4,
        color: "Naranja",
        precio: 26900
    },
    {
        codigo: 6,
        nombre: "Anafe plegable",
        imagen: "../img/anafeChico.jpg",
        capacidad: 250,
        altura: 15,
        ancho: 10.5,
        profundidad: 10.5,
        peso: 3.4,
        color: "Gris",
        precio: 11000
    },
    {
        codigo: 7,
        nombre: "sol de noche",
        imagen: "../img/solDeNoche.jpg",
        capacidad: 50,
        altura: 40,
        ancho: 17,
        profundidad: 17,
        peso: 0.5,
        color: "Verde",
        precio: 90000
    },
    {
        codigo: 8,
        nombre: "tetera de vidrio",
        imagen: "../img/tetera.jpg",
        capacidad: 1,
        altura: 19,
        ancho: 15, 
        profundidad: 15,
        peso: 0.5,
        color: "Transparente",
        precio: 35300
    }
]
let productosHTML= "";
for (indice = 0; indice < productos.length; indice++){
    productosHTML += `
                    <div id ="contenedorProductos">
                            <img class ="tarjetas" src=${productos[indice].imagen}>
                        <h3>${productos[indice].nombre}</h3>
                            <p>Capacidad: ${productos[indice].capacidad}</p>
                            <p>altura: ${productos[indice].altura} cm </p>
                            <p>ancho: ${productos[indice].ancho} cm </p>
                            <p>profundidad:${productos[indice].profundidad} cm</p>
                            <p>peso: ${productos[indice].peso} kg </p>
                            <p>precio: $${productos[indice].precio}</p>
                            <input class= "boton-agregar-carrito" type="button" value="Agregar al carrito">
                    </div>
`;  
};

const contenedorProductos = document.getElementById ("contenedorProductos");
contenedorProductos.innerHTML = productosHTML;  //innerTEXT es contenido del texto de un elemento... nuestro contenedor de curso adentrotiene otros elementos html entonces usamos inner HTML para reemplazar lo que tiene. Dentro le ponemos lo que guardamos en la variable productosHTML
//*agregar un listener a los botones de los productos */
/*botón agregar carrito*/
const btnAgregar = document.querySelectorAll(".boton-agregar-carrito");
console.log(btnAgregar);

const listaCarrito = document.querySelector("#carrito ul");

const totalCarrito = document.querySelector("#carrito p")
let totalAPagar = 0;
//agregamos el listener a cada boton//
for (let indice=0; indice < btnAgregar.length; indice++){
    
    function agregarElementoCarrito(){
        console.log("click "+ indice);
        const elementoLi = document.createElement("li");
        elementoLi.innerText = `Producto ${productos[indice].nombre} $${productos[indice].precio}`;
        console.log(elementoLi);
        listaCarrito.appendChild(elementoLi);
        totalAPagar += productos[indice].precio;
        totalCarrito.innerText = "Total a pagar: $ " + totalAPagar;
        mensajePagarCarrito.innerText = " ";
    }
    btnAgregar[indice].addEventListener("click", agregarElementoCarrito)
}

// Listener del boton borrar

const botonBorrar= document.querySelector("#boton-borrar");
const mensajePagarCarrito = document.getElementById("mensajeCarrito");

function borrarCarrito(){
    listaCarrito.innerHTML = " ";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = "";
};

botonBorrar.addEventListener("click", borrarCarrito);

const botonPagar = document.querySelector("#boton-pagar");
botonPagar.addEventListener("click", irAPagar);

function irAPagar(){
    mensajePagarCarrito.innerText = "No has seleccionado ningún producto"
    if(listaCarrito.innerText === ""){
    } else {
    window.location.href = "./pagos.html"//ventana del navegador 
}
}