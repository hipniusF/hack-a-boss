'use strict';

class Exchanger {
	constructor(url, selects, output, outputSelect, input, inputSelect, button) {
		this.url = url;
		this.selects = selects;

		this.output = output;
		this.outputSelect = outputSelect;
		this.input = input;
		this.inputSelect = inputSelect;
		this.button = button;

		this.rates = this.getChangeRates();
	}

	addEvent() {
		button.addEventListener('click', this.clickHandler);
	}

	async getChangeRates() {
		return (await (await fetch(this.url)).json()).rates;
	}

	async getConvertion(event) {
		const value = await this.convert(this.inputSelect.value, this.input.value, this.outputSelect.value);

		this.writeOutput(await value);
	}

	async writeCurrencies() {
		for (const select of this.selects) {
			for (const currency in await this.rates) {
				const newOption = document.createElement('option');
				newOption.textContent = currency;
				newOption.setAttribute('value', currency);

				select.append(newOption);
			}
		}
	}

	async convert(inputCurrency, amount, outputCurrency) {
		const intputRate = (await this.rates)[inputCurrency];
		const outputRate = (await this.rates)[outputCurrency];

		return (amount / intputRate) * outputRate;
	}

	clickHandler(event) {
		event.preventDefault();

		myExchanger.getConvertion();
	}

	writeOutput(output) {
		this.output.value = output;
	}
}

const url = 'https://api.exchangerate-api.com/v4/latest/EUR';

const selects = document.querySelectorAll('select.currencies');
const output = document.querySelector('#output');
const outputSelect = document.querySelector('.outputSelect');
const input = document.querySelector('#input');
const inputSelect = document.querySelector('.inputSelect');
const button = document.querySelector('button');

const myExchanger = new Exchanger(url, selects, output, outputSelect, input, inputSelect, button);
myExchanger.writeCurrencies();
myExchanger.addEvent();
