'use strict';

const tableData = {
	caption: 'Temperatura',
	columns: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
	data: [
		[10.3, 11, 10.8, 11.22, 21.3],
		[9.2, 3.1, 7.7, 2.56, 12.7],
		[7.4, 9.22, 5.61, 3.9, 44.25],
		[5.5, 11.12, 11.33, 14.16, 22.37],
		[11.3, 7.75, 15.78, 11.36, 8.02]
	]
};

function mark(thArray) {
	console.log(Math.min(thArray));
	for (const th of thArray) {
		const number = th.textContent;
	}
}

function markAllRows(table) {
	for (let i = 3; i < table.children.length + 1; i++) {
		let tableRow = table.querySelectorAll(`tr:nth-child(${i}) th`);
		mark(tableRow);
	}
	return table;
}

function generateRow(data) {
	const headerRow = document.createElement('tr');
	for (const item of data) {
		const th = document.createElement('th');
		th.textContent = item;
		headerRow.append(th);
	}
	return headerRow;
}

function buildTable() {
	const table = document.createElement('table');

	const caption = document.createElement('caption');
	caption.textContent = tableData.caption;
	table.append(caption);

	table.append(generateRow(tableData.columns));

	//Create dataRows
	for (const item of tableData.data) {
		table.append(generateRow(item));
	}
	return table;
}

const section = document.querySelector('#table');
const tableTemplate = buildTable();
const tableColored = markAllRows(tableTemplate);
const table = section.append(tableColored);
