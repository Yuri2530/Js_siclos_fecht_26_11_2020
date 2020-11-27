//while
/*let numero = 1;
while(numero<3){
    debugger;
    console.log(numero);
    numero++;
}*/


//do while
/*let numero = 1;
do{
    console.log(numero);
    numero++;
}while(numero<=3);*/


/*let permiso = true;

while(permiso){

    let user = prompt("Ingrese ek usuario");
    if(user == "Yuri"){
        permiso=false;
        document.write("Inicio sesion")
    }
}while(permiso);*/



/*do{

    let user = prompt("Ingrese el usuario");
    if(user == "Yuri"){
        permiso=false;
        document.write("Inicio sesion")
    }
}while(permiso);*/


//for
/*for (let i = 0; i <= 6; i++) {
    console.log(i);
    
}

for (let i = 6; i > 0; i-=2) {
    console.log(i);
    
}*/

let lista = ["perro", "delfin", "gato", "pollo", "elefante"];
let lista_animales = [];
lista_animales["canino"] = "perro" ;
lista_animales["acuatico"] = "delfin" ;
lista_animales["felino"] = "gato" ;
lista_animales["aves"] = "pollo" ;
lista_animales["terrestres"] = "elefante" ;

console.log(lista_animales);
console.log(Object.keys(lista_animales).length);

/*for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
    
console.log("\n")
for (let i = (lista.length-1); i >= 0; i--) {
    
    console.log(lista[i]);
}*/

//de esta manaera se recorre la lista y se sacan los datos perono se pueden saber posiciones
/*for(dato of lista){
console.log(dato);
}
console.log(Object.values(lista));

for(posicion in lista){
    console.log(posicion)
}*/

/*for(datos in lista_animales){
    console.log(lista_animales[datos]);
}*/

/*let key = Object.keys(lista_animales);
for (let i = 0; i < array.length; i++) {
    const element = array[lista_animales[key[i]]];
    
}*/

console.log(lista_animales);
let key = Object.keys(lista_animales);
console.log(key);
for (let i = (key.length-1); i >= 0; i--) {
    console.log(lista_animales[key[i]]);
    
}


