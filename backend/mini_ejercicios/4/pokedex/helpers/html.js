Number.prototype.pad = function (size) {
	let s = String(this);
	while (s.length < (size || 2)) {
		s = "0" + s;
	}
	return s;
};

function pageLayout(title, content) {
	return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<title>${title}</title>
	
	<link rel="stylesheet" href="/css/style.css" />
  </head>
  <body><header><h1><a href="/">Pokedex!</a></h1></header>${content}</body></html>`;
}

function frontPage() {
	return `
  <section>
	<form action="/search" method="GET">
	  <fieldset>
		<label for="query">Busca tu pokemon</label>
		<input type="search" name="query" id="query" /> 
	  </fieldset>
	  <button>Buscar</button>
	</form>
  </section>
  `;
}

function createPage(pokemon) {
	return `
	<h1>${pokemon[0].name.english}</h1>
	<img src="/images/${pokemon[0].id.pad(3)}.png"/>
	<h2>Type</h2>
	<p>${pokemon[0].type.join(" ")}</p>
	<h2>Stats</h2>
	<h3>HP: ${pokemon[0].base.HP}</h3>
	<h3>Attack: ${pokemon[0].base.Attack}</h3>
	<h3>Defense: ${pokemon[0].base.Defense}</h3>
	<h3>Sp. Attack: ${pokemon[0].base["Sp. Attack"]}</h3>
	<h3>Sp. Defense: ${pokemon[0].base["Sp. Defense"]}</h3>
	<h3>Speed: ${pokemon[0].base.Speed}</h3>
	`;
}

function searchResults(results) {
	const ul = [];

	for (const pokemon of results) {
		ul.push(
			`<li><a href="/figures/${pokemon.name.english.toLowerCase()}">${
				pokemon.name.english
			}</a></li>`
		);
	}
	console.log(ul);
	return `<section><ul>${ul.join()}</ul></section>`;
}

function errorPage(message) {
	return `
	<section class="error">
	  <p>${message}</p>
	  <a href="/">Volver a la portada</a>
	</section>pokemon
  `;
}

module.exports = {
	pageLayout,
	frontPage,
	errorPage,
	searchResults,
	createPage,
};
