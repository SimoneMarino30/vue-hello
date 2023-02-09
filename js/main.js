// TRACCIA:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
//
// BONUS:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Boolean!",
      image: "./img/booleanDuck.jpg",
      titleClasses: "container text-center mt-5 fw-bold text-warning",
    };
  },
}).mount("#root");
