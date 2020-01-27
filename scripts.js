//Primero vamos a leer lo que el usuario presione
//cuando le den click a algun boton
// function getContentClick(event) {
//   const value = event.target.innerHTML;
//   filterAction(value);
// }

//Luego vamos a filtar para que ver si es un numero o alguna operacion
// const filterAction = value => {
//   console.log("Estamos en filterAction");
//   console.log(value);
// };

function getContentClick(event) {
  const value = event.target.innerHTML;
  filterAction(value);
}

const filterAction = value => {
  console.log(value);
};
