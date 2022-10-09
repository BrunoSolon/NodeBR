function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Lucas",
      dataNascimento: new Date(),
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "9831321",
      ddd: 11,
    });
  }, 1000);
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("DEU RUIM");
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("Erro telefone");
      return;
    }
    console.log(`
            Nome: ${usuario.nome},
            Telefone: ${telefone.telefone}
        `);
  });
});

/* Chama obterUsuario passando resolverUsuario como parametro
   obterUsuario recebe resolverUsuario no parametro callback, e entao retorna com os valores
*/
