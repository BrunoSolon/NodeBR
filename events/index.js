const EventEmitter = require("events");

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";

meuEmissor.on("event", function (click) {
  console.log(click, this, this === meuEmissor);
});
// meuEmissor.emit('event', 'click')

// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// },1000)

const stdin = process.openStdin();
stdin.addListener("data", function (value) {
  console.log("Voce digitou:", value.toString().trim());
});
