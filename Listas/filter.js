const { obterUser } = require("./service.js");

async function main() {
  try {
    const { results } = await obterUser("a");
    const familyLars = results.filter(
      (item) => item.name.toLowerCase().indexOf("lars") !== -1
    );
    const names = familyLars.map((pessoa) => pessoa.name);
    console.log(names);
  } catch (error) {
    console.warn("Error", error);
  }
}

main();
