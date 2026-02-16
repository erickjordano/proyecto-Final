// Variables de configuración inicial
var precio_base = 2000

// Porcentajes de recargos base
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

// Variables para los PUNTOS EXTRA
var recargo_propiedad_porcentaje = 0.35 // 35%
var recargo_salario_porcentaje = 0.05 // 5%

// Variable para controlar el ciclo (Punto extra)
var entrada_usuario = ""

// El programa se repite hasta que el usuario escriba "Salir"
while (entrada_usuario.toUpperCase() != "SALIR") {
  
  var recargo_total = 0
  
  var nombre = prompt("Ingrese su nombre")
  var edad = prompt("Ingrese su edad (solo números)")
  var edad_numero = parseInt(edad)

  // 1. Validar que sea mayor de edad
  if (edad_numero < 18) {
    alert("El asegurado debe ser mayor de edad.")
  } else {
    
    // Datos de estado civil
    var casado = prompt("¿Está casado/a? (SI/NO)")
    var edad_conyuge_numero = 0
    if ("SI" == casado.toUpperCase()) {
      var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?")
      edad_conyuge_numero = parseInt(edad_conyuge)
    }

    // Datos de hijos
    var tiene_hijos = prompt("¿Tiene hijos? (SI/NO)")
    var cantidad_hijos = 0
    if ("SI" == tiene_hijos.toUpperCase()) {
      var hijos_ingresados = prompt("¿Cuántos hijos tiene?")
      cantidad_hijos = parseInt(hijos_ingresados)
    }

    // --- PUNTOS EXTRA: Propiedades e Ingresos ---
    var propiedades = prompt("¿Cuántas propiedades tiene?")
    var cantidad_propiedades = parseInt(propiedades)
    
    var salario = prompt("¿Cuál es su salario mensual?")
    var salario_numero = parseFloat(salario)
    // --------------------------------------------

    // CALCULAR RECARGOS
    
    // Recargo por edad del asegurado
    if (edad_numero >= 18 && edad_numero < 25) {
      recargo_total = recargo_total + (precio_base * edad_18)
    } else if (edad_numero >= 25 && edad_numero < 50) {
      recargo_total = recargo_total + (precio_base * edad_25)
    } else if (edad_numero >= 50) {
      recargo_total = recargo_total + (precio_base * edad_50)
    }

    // Recargo por edad del cónyuge (si está casado)
    if ("SI" == casado.toUpperCase()) {
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        recargo_total = recargo_total + (precio_base * edad_18)
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        recargo_total = recargo_total + (precio_base * edad_25)
      } else if (edad_conyuge_numero >= 50) {
        recargo_total = recargo_total + (precio_base * edad_50)
      }
    }

    // Recargo por hijos
    if (cantidad_hijos > 0) {
      var recargo_hijos = (precio_base * hijos_recargo) * cantidad_hijos
      recargo_total = recargo_total + recargo_hijos
    }

    // --- PUNTOS EXTRA: Cálculos nuevos ---
    // Recargo por propiedades (35% por cada una)
    var recargo_por_propiedades = (precio_base * recargo_propiedad_porcentaje) * cantidad_propiedades
    recargo_total = recargo_total + recargo_por_propiedades

    // Recargo por salario (5% sobre el salario)
    var recargo_por_salario = salario_numero * recargo_salario_porcentaje
    recargo_total = recargo_total + recargo_por_salario
    // -------------------------------------

    // Resultado final
    var precio_final = precio_base + recargo_total
    alert("Asegurado: " + nombre)
    alert("Recargo total: Q." + recargo_total)
    alert("Precio final: Q." + precio_final)
  }

  // Preguntar si quiere salir o seguir (Punto extra)
  entrada_usuario = prompt("Escriba 'Salir' para cerrar el programa o pulse Aceptar para otra cotización")
}