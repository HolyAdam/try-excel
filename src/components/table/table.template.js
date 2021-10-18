const codes = {
	'A': 65,
	'Z': 90
}

function createCell(numCell) {
	return `
		<div class="cell" contenteditable="">${numCell}</div>
	`.trim()
}

function createColumn(nameCol = '') {
	return `
		<div class="column">
		  ${nameCol}
		</div>
	`
}

function createRow(content, title = '') {
	return `
		<div class="row">
			<div class="row-info">
				${title}
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
		.map((_, i) => createColumn(String.fromCharCode(codes['A'] + i)))
		.join('')

	rows.push(createRow(cols))

	for (let i = 0; i < rowsCount; i++) {
		const cells = new Array(colCounts)
			.fill('')
			.map((_, index) => createCell(`${String.fromCharCode(codes['A']+index)}${i+1}`))
			.join('')

		rows.push(createRow(cells, i + 1))

	}

	return rows.join('')

}