function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject({
        id: 5,
        nome: "Bruno",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

obterUsuario()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
