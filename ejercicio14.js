/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
Puedes usar este array para probar tu función: */

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code"
];

function repeatCounter(list) {
  let counterArray = [];
  let lastWord = "";
  let count = 0;

  list.sort();
  for (let i = 0; i < list.length; i++) {
    if ((i === 0)) {
      lastWord = list[i];
      count = 1;
    } else if ((i !== 0) && (i !== (list.length - 1))) {
      if (list[i] === lastWord) {
        count++;
      } else if (list[i] !== lastWord) {
        counterArray.push(lastWord + " -> " + count);
        lastWord = list[i];
        count = 1;
      }
    } else {
      if (list[i] === lastWord) {
        count++;
        counterArray.push(lastWord + " -> " + count);
      } else if (list[i] !== lastWord) {
        lastWord = list[i];
        count = 1;
        counterArray.push(lastWord + " -> " + count);
      }
    };
  };
  console.log(counterArray);
};

repeatCounter(words);
