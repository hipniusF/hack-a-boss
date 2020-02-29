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

function markLargest(thArray) {
	let biggerToNow = [0, null];

	for (const th of thArray) {
		const number = th.textContent;

		if (number > biggerToNow[0]) {
			biggerToNow[0] = number;
			biggerToNow[1] = th;
		}
	}
	biggerToNow[1].classList.add('large');
}

function markSmallest(thArray) {
	let biggerToNow = [Infinity, null];

	for (const th of thArray) {
		const number = th.textContent;

		if (number < biggerToNow[0]) {
			biggerToNow[0] = number;
			biggerToNow[1] = th;
		}
	}
	biggerToNow[1].classList.add('small');
}

function generateHeaderRow(data) {
	const headerRow = document.createElement('tr');
	for (const item of data) {
		const th = document.createElement('th');
		th.textContent = item;
		headerRow.append(th);
	}

	return headerRow;
}

function buildTable() {
	//Create table
	const section = document.querySelector('#table');
	const table = document.createElement('table');

	//Create caption
	const caption = document.createElement('caption');
	caption.textContent = tableData.caption;
	table.append(caption);

	//Create firstRow
	table.append(generateHeaderRow(tableData.columns));

	//Create dataRows
	for (const item of tableData.data) {
		table.append(generateHeaderRow(item));
	}
	section.append(table);
}

buildTable();
for (let i = 3; i < 8; i++) {
	const thArray = document.querySelectorAll(`tr:nth-child(${i}) th`);
	markLargest(thArray);
	markSmallest(thArray);
}
