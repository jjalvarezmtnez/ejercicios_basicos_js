/* Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let suma = 0;
  let total;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  };
  total = suma / numberList.length;
  console.log(total);
};

average(numbers);