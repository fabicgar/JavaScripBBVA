function calcularDNI(dni){
    var letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    var numero = null;
    numero = dni % 23;
    for(var i =0; i<numero; i++){
        var letraAsignada = letra[numero];

    } 
    console.log("letra Correspondiente " + letraAsignada);
    return letraAsignada;
}

calcularDNI(78163312);