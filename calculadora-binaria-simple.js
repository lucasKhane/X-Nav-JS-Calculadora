$(document).ready(function() {
  OP1="";
  OP2="";
  $("#boton0").click(function(){
    valorActual=$(this).val();
    valorAntiguo = $("#display2").val();
    $("#display2").val(valorAntiguo + valorActual);
  });

  $("#boton1").click(function(){
    valorActual=$(this).val();
    valorAntiguo = $("#display2").val();
    $("#display2").val(valorAntiguo + valorActual);
  });

  $("#botonMas").click(function(){
    OP1 = $("#display2").val();
    $("#display1").val(OP1+" + ");
    $("#display2").val("");
  });

  $("#botonIgual").click(function(){
    OP2 = $("#display2").val();
    valorAntiguo = $("#display1").val();
    $("#display1").val(valorAntiguo+OP2+" =");

    numero1 = parseInt(OP1, 2);
    console.log(numero1);
    numero2 = parseInt(OP2, 2);
    console.log(numero2);

    var resultado = numero1 + numero2;
    $("#display2").val(resultado.toString());
  });

  $("#botonC").click(function(){
    $("#display1").val("");
    $("#display2").val("");
  });
});
