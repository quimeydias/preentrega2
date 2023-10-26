let listaproductos = "Para seleccionar ingrese el numero del producto:" + "\n"


//filtra todos los productos que no sean men's clothing o jewelery


const productosFiltrados = products.filter((products) => {
    if (products.category == "men's clothing") {
        return products.category == "men's clothing"
    }
    if (products.category == "jewelery") {
        return products.category == "jewelery"
    }

})


//lo ordena de la A a la Z
productosFiltrados.sort((x, y) => x.title.localeCompare(y.title));
console.log(productosFiltrados);




alert("Hola!, bienvenido a nuestro ecommerce")

alert("Categorias disponibles: 1- men's clothing   2-jewelery")


//guardo todos los productos en forma de lista para despues mostrarlo en el prompt 
for (let i = 0; i < productosFiltrados.length; i++) {

    listaproductos = listaproductos + " " + productosFiltrados[i].id + "-" + productosFiltrados[i].title + "\n"

}


let idproducto = prompt(listaproductos)

let productoelegido = ""



//buscar el producto seleccionado
for (let i = 0; i < productosFiltrados.length; i++) {

    if (productosFiltrados[i].id == idproducto) {
        productoelegido = "Titulo: " + productosFiltrados[i].title + "\n" + "Descripcion: " + productosFiltrados[i].description + "\n" + "Precio: " + productosFiltrados[i].price
    }
}



let x = 0

while (x < 3) {

    if (productoelegido == "") {
        alert("No se encontro el producto")

        var opcion1 = confirm("Desea buscar otro producto?");
        
        if (opcion1 == true) {


            idproducto = prompt(listaproductos)

            //pasar a funcion
            for (let i = 0; i < productosFiltrados.length; i++) {

                if (productosFiltrados[i].id == idproducto) {
                    productoelegido = "Titulo: " + productosFiltrados[i].title + "\n" + "Descripcion: " + productosFiltrados[i].description + "\n" + "Precio: " + productosFiltrados[i].price + "\n"
                }
            }

            x = 0

        } else {
            alert("Gracias por su interaccion");
            x = 4
        }


    }

    if (productoelegido != "") {

        var opcion = confirm(productoelegido + "Desea comprarlo?");
        if (opcion == true) {
            let fecha = new Date();
            alert("Gracias por su compra, la fecha de entrega es: " + fecha);
        } else {
            alert("Gracias por su interaccion");
        }

        x = 4
    }


}
