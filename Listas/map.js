const service = require("./service.js");

async function main() {
  try {
    const resultado = await service.obterUser("a");
    const names = resultado.results.map((pessoa) => pessoa.name);
    console.log(names);
  } catch (error) {
    console.error("Error Interno", error);
  }
}

main();
