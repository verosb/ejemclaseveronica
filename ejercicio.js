var array;


function cargarpagina(){
     array = [
        {nombre:"Veronica",codigo: "191997",doc: "123545",prog:"Ing.Sistemas"},
        {nombre:"Sanchez",codigo: "191997",doc: "123545",prog:"Ing.Sistemas"},
        {nombre:"Beleño",codigo: "191997",doc: "123545",prog:"Ing.Sistemas"}
    ];
    console.log(array);

}
function calcular(){
    let nombre = $("#nombre").val();
    for (let i=0;i<array.length;i++){
        if(nombre==array[i].nombre){
            console.log("EL NOMBRE ENCONTRADO ES" + nombre);
            break;
        }
        else{
            console.log("SU NOMBRE" +nombre+ " NO FUE ENCONTRADO");
        }
    }
}