import { ExcelComponent } from '@core/ExcelComponent'
import { $ } from '@core/dom'

export class FormulaComponent extends ExcelComponent {

	static className = 'excel__formula'

	constructor($root, options = {}) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click', 'keydown'],
			...options
		})
	}


	toHTML() {
		return `
			<div class="info">fx</div>
			<div id="int" class="input" contenteditable spellcheck="false"></div>
		`
	}

	init() {
		super.init()

		this.$formula = this.$root.find('#int')

		this.$on('table:selectkeydown', $cell => {
			this.$formula.text($cell.text())
		})

		this.$on('table:input', $cell => {
			this.$formula.text($cell.text())
		})

		this.$on('table:click', $cell => {
			this.$formula.text($cell.text())
		})
	}

	onInput(e) {
		this.$emit('formula:input', $(e.target).text())
	}

	onKeydown(e) {
		const { key } = e
		const keys = ['Enter', 'Tab']
		if (keys.includes(key)) {
			e.preventDefault()

			this.$emit('formula:keydown', null)
		}
	}
	
	onClick(e) {
		
	}
	
}