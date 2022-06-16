//const precio_original= 100;
//const porcentaje_descuento= 0.15;



//console.log({
    //precio_original,
    //descuento,
    //descuento_total,
    //precio_a_pagar,
//});


/*var input_suscripcion=document.getElementById("input_suscripcion");
var suscripcion=input_suscripcion.value;*/




/*function on_click_precio_con_decuento(){
    const input_price=document.getElementById("input_price");
    const precio=input_price.value;
    
    const input_descuento=document.getElementById("input_discount");
    const descuento=input_descuento.value;

    const precion_con_descuento=calcular_precio_con_descuento(precio,descuento);

    const resultado=document.getElementById("resultado")
    resultado.innerHTML="el precio con descuento son: $" + precion_con_descuento;
}*/

var array_asociativa=[];
array_asociativa["free"]= 0.15;
array_asociativa["basic"]= 0.30;
array_asociativa["expert"]= 0.50;


var suscripcion;

function tipo_de_cupon(){
    
    var input_suscripcion=document.getElementById("input_suscripcion").value;
    suscripcion=input_suscripcion
}


function calcular_precio_con_descuento(precio,descuento){
    
    var descuento_total=precio*descuento
    var precio_a_pagar=precio*(1-descuento);

    return precio_a_pagar
}


function comprobacion_cupon(array){
    
    if((suscripcion==="free") || (suscripcion==="basic") || (suscripcion==="expert")){
        const descuento=array[suscripcion];
        const descuento_porcentaje=descuento*100;
        const input_price=document.getElementById("input_price");
        const precio=input_price.value;
      
        const precio_con_descuento=calcular_precio_con_descuento(precio,descuento);
        const resultado=document.getElementById("resultado");
        resultado.innerHTML="el precio con descuento son: $" + precio_con_descuento+"</br>"+ "tu descuento por el cupon es del: " + descuento_porcentaje+"%";
    }

    else{
        const input_price=document.getElementById("input_price");
        const precio=input_price.value;
        const resultado=document.getElementById("resultado");
        resultado.innerHTML="el cupon no es valido" +"<br />"+"el precio a pagar es de: $"+ precio;
    }
}


function on_click_precio_con_decuento(){
    
    comprobacion_cupon(array_asociativa);
}