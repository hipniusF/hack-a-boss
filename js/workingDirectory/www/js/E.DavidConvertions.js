'use strict';

async function eurToUsd(eur) {
	const allcurrenciesRates = (await (await fetch('https://api.exchangerate-api.com/v4/latest/EUR')).json()).rates;
	const oneEurToUSd = allCurrenciesRates.USD;

	return eur * oneEurToUSd;
}

async function usdToJpy(usd) {
	const allCurrenciesRates = (await (await fetch('https://api.exchangerate-api.com/v4/latest/EUR')).json()).rates;

	const oneUsdToJpy = allCurrenciesRates.JPY / allCurrenciesRates.USD;

	return usd * oneUsdToJpy;
}

async function eurToUsdToJpy(eur) {
	return await usdToJpy(await eurToUsd(eur));
}

eurToUsdToJpy(100).then((value) => console.log(value));
