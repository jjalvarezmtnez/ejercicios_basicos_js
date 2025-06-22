/* Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función: */

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];



function removeDuplicates(list) {
  let copyArray = [];
  for (let i = 0; i < list.length; i++) {
    copyArray.push(list[i]);  
  };
  copyArray.sort();
  let lastWord = "";
  for (let i = 0; i < copyArray.length; i++) {
    if (copyArray[i] === lastWord){
      copyArray.splice(i, 1);
      i--;
    } else {
      lastWord = copyArray[i];
    };
  };
  console.log(copyArray);
};

removeDuplicates(duplicates);
