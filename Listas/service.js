const axios = require("axios");
const URL = "https://swapi.co/api/people";

const obterUser = async (user) => {
  const url = `${URL}/?search=${user}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = {
  obterUser,
};
