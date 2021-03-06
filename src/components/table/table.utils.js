export function willResize(event) {
	return event.target.dataset.resize
}

export function isCell(event) {
	return event.target.dataset.cell
}

export function nextSelector(key, { col, row }) {

	const MIN_VALUE = 1
	// const MAX_VALUE = 10 поправлю баг попозже

	switch (key) {
		case 'Enter':
		case 'ArrowDown':
			row++
			break;
		case 'Tab':
		case 'ArrowRight':
			col++
			break;
		case 'ArrowLeft':
			col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
			break;
		case 'ArrowUp':
			row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
			break;

	}


	return `[data-id="${row}:${col}"]`


}