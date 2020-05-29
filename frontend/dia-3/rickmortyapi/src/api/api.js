const axios = require("axios").default;

const url = "https://rickandmortyapi.com/api/";

async function getAll() {
	const chars = await axios.get(`${url}/character`);

	for (const char of chars.data.results) {
		char.url = `https://rickandmorty.fandom.com/wiki/${char.name.replace(
			" ",
			"_"
		)}`;
	}
	return chars;
}

export default { getAll };
