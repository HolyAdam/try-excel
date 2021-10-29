const codes = {
	'A': 65,
	'Z': 90
}

// function createCell(numCell, index, row) {
// 	return `
// 		<div class="cell" contenteditable="" data-column="${index}" data-colrow="${row}:${index}">${numCell}</div>
// 	`.trim()
// }

function createCell(row) {
	return function(_, index) {
		return `
			<div class="cell" data-cell="tzxc" contenteditable="" data-column="${index + 1}" data-id="${row + 1}:${index + 1}"></div>
		`.trim() 
	}
}



function createColumn(nameCol = '', index) {
	return `
		<div class="column" data-type="column" data-column="${index + 1}">
		  ${nameCol}
		  <div class="column-resize" data-resize="column"></div>
		</div>
	`
}

function createRow(content, title = '') {
	const resizer = title ? '<div class="row-resize" data-resize="row"></div>' : ''
	return `
		<div class="row" data-type="column">
			<div class="row-info">
				${title}
				${resizer}
			</div>
			<div class="row-data">
				${content}
			</div>
		</div>
	`.trim()
}

export function createTable(rowsCount = 5) {
	const colCounts = codes['Z'] - codes['A'] + 1

	const rows = []
	const cols = new Array(colCounts)
		.fill('')
		.map((_, i) => createColumn(String.fromCharCode(codes['A'] + i), i))
		.join('')

	rows.push(createRow(cols))

	for (let i = 0; i < rowsCount; i++) {
		const cells = new Array(colCounts)
			.fill('')
			// .map((_, index) => createCell(`${String.fromCharCode(codes['A']+index)}${i+1}`, index, i+1))
			.map(createCell(i))
			.join('')

		rows.push(createRow(cells, i + 1))

	}

	return rows.join('')

}