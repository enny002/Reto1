const calcularBtn = document.getElementById("calcular");
calcularBtn.addEventListener("click", calcularTotal);

function calcularTotal() {
  const cantidadInput = document.getElementById("cantidad");
  const colorInput = document.getElementById("color");

  const cantidad = cantidadInput.value;
  const color = colorInput.value;

  const total = cantidad * 100;

  const cantidadResumen = document.getElementById("cantidad-resumen");
  const colorResumen = document.getElementById("color-resumen");
  const totalResumen = document.getElementById("total-resumen");
  const circulo = document.getElementById("circulo");

  cantidadResumen.textContent = cantidad;
  colorResumen.textContent = color;
  totalResumen.textContent = "$" + total;

  switch (color.toLowerCase()) {
    case "rojo":
      circulo.style.backgroundColor = "red";
      break;
    case "azul":
      circulo.style.backgroundColor = "blue";
      break;
    case "verde":
      circulo.style.backgroundColor = "green";
      break;
    case "amarillo":
      circulo.style.backgroundColor = "yellow";
      break;
    case "negro":
      circulo.style.backgroundColor = "black";
  }

}
