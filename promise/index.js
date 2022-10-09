function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "Bruno",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}
function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: "9831321",
        ddd: 11,
      });
    }, 1000);
  });
}

function obterEndereco(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: "dos bobos",
        numero: 0,
      });
    }, 1000);
  });
}

const usuarioPromise = obterUsuario();

usuarioPromise
  .then((usuario) => {
    return obterTelefone(usuario.id).then((result) => {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id,
        },
        telefone: result,
      };
    });
  })
  .then((resultado) => {
    const endereco = obterEndereco(resultado.id);
    return endereco.then((result) => {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      };
    });
  })
  .then((resultado) => {
    console.log(`
            Nome: ${resultado.usuario.nome},
            Id: ${resultado.usuario.id},
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        `);
  })
  .catch((error) => {
    console.warn(error);
  });

// obterUsuario(function resolverUsuario(error, usuario) {
//     if(error){
//         console.error('DEU RUIM')
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error('Erro telefone')
//             return
//         }
//         console.log(`
//             Nome: ${usuario.nome},
//             Telefone: ${telefone.telefone}
//         `)
//     })
// })
