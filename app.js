/* 
    QUE LAS PROMESAS SON EVENTOS QUE VAN A OCURRIR A FUTURO (DENTRO DE 1 SEGUNDO O 1 HORA).
    ES DECIR, ES UN PROCESO ASINCRONO.
    JAVASCRIPT EJECUTA EN PRIMER LUGAR LO QUE LAS INSTRUCCIONES SINCRONAS (INMEDIATAS) Y EN SEGUNDO PLANO LAS ASINCRONAS (EVENTOS A FUTUROS).
*/
/*
console.log('Primera linea de codigo')

setTimeout(()=> {
    console.log('peticion a una api');
}, 1000)

console.log('Ultima linea codigo');

*/
/*
    LAS PROMESAS SE CREAN CON new Promise, reciben por parametro una funcion. Esta funcion que recibe a la vez recibe dos parametros
*/