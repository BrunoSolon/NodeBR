const service = require("./service.js");

async function main() {
  try {
    const result = await service.obterUser("a");
    const names = [];

    console.time("forof");
    for (user of result.results) {
      names.push(user.name);
    }
    console.log(names);
    console.timeEnd("forof");
  } catch (error) {
    console.error("Error Interno", error);
  }
}

main();
