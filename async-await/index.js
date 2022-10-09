// -------------------- ASYNC/AWAIT ----------------
function obterUsuario() {
  return new Promise((resolve, reject) => {
    obterTelefone(id)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    /*setTimeout(() => {
            return reject({
                id: 1,
                nome: "Bruno",
                dataNascimento: new Date()
            })
        }, 1000)*/
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

async function main() {
  console.time("tempo");
  const usuario = await obterUsuario();
  const resultado = await Promise.all([
    obterTelefone(usuario.id),
    obterEndereco(),
  ]);
  const telefone = resultado[0];
  const endereco = resultado[1];
  console.timeEnd("tempo");

  console.log(usuario);
  console.log(telefone);
  console.log(endereco);
}
main();

// -------------------- PROMISE ----------------
// const usuarioPromise = obterUsuario()

// usuarioPromise
//     .then((usuario) => {
//         return obterTelefone(usuario.id)
//         .then (result => {
//             return{
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(resultado => {
//         const endereco = obterEndereco(resultado.id)
//         return endereco.then(result => {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then (resultado => {
//         console.log(`
//             Nome: ${resultado.usuario.nome},
//             Id: ${resultado.usuario.id},
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//         `)
//     })
//     .catch(error => {
//         console.warn(error)
//     })

// ------------ CALLBACK --------------

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
