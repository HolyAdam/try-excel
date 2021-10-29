import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { tableResizeHandler } from '@/components/table/table.resize'
import { TableSelection } from '@/components/table/TableSelection'
import { willResize, isCell, nextSelector } from '@/components/table/table.utils'
import { $ } from '@core/dom'

export class TableComponent extends ExcelComponent {

	static className = 'excel__table'

	constructor($root, options) {
		super($root, {
			name: 'Table',
			listeners: ['mousedown', 'keydown', 'input', 'click'],
			...options
		})
	}

	toHTML() {
		return createTable(10)
	}

	prepare() {
		this.selection = new TableSelection()
	}	

	init() {
		super.init()

		const $cell = this.$root.find(`[data-id="1:1"]`)
		this.selectCell($cell)

		this.$on('formula:input', (text) => {
			this.selection.current.text(text)
		})

		this.$on('formula:keydown', () => {
			this.selection.current.focus()
		})


	}


	selectCell($cell) {
		this.selection.select($cell)
		this.$emit('table:selectkeydown', $cell)
	}

	onMousedown(event) {
		if (willResize(event)) {
			tableResizeHandler(this.$root, event)
		} else if (isCell(event)) {
			const $target = $(event.target) 
			if (event.shiftKey) {
				// group
				const targetElInfo = $target.id(true)
				const currentElInfo = this.selection.current.id(true)

				const cols = range(currentElInfo.col, targetElInfo.col)
				const rows = range(currentElInfo.row, targetElInfo.row)
				
				const ids = cols.reduce((acc, col) => {

					rows.forEach(row => acc.push(`${row}:${col}`))
					return acc

				}, [])

				const $cells = ids.map(id => {
					return this.$root.find(`[data-id="${id}"]`)
				})

				this.selection.selectGroup($cells)



				// [end, start] = [start, end]
				// [end, start] = [start, end]
				// [end, start] = [start, end]
				// [end, start] = [start, end]

			} else {
				this.selection.select($target)

			}
		}

	}

	onInput(e) {
		this.$emit('table:input', $(e.target))
	}

	onClick(e) {
		this.$emit('table:click', $(e.target))
	}

	onKeydown(event) {
		const keys = [
		'Enter', 
		'Tab', 
		'ArrowLeft', 
		'ArrowRight', 
		'ArrowDown',
		'ArrowUp'
		]

		const { key } = event
		
		if (keys.includes(key) && !event.shiftKey) {
			event.preventDefault()

			const id = this.selection.current.id(true)
			
			const $next = this.$root.find(nextSelector(key, id))
			this.selectCell($next)


		}

	}
	
}

// 339 мсСценарии
// 1972 мсОтрисовка


function range(start, end) {

	if (start > end) {
		[end, start] = [start, end]
	}


	return new Array(end - start + 1)
		.fill('')
		.map((_, index) => start + index)
}

// input: 0, 3
// output: [0, 1, 2, 3]

