import { ExcelComponent } from '@core/ExcelComponent'

export class FormulaComponent extends ExcelComponent {

	static className = 'excel__formula'

	constructor($root) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click']
		})
	}


	toHTML() {
		return `
			<div class="info">fx</div>
			<div class="input" contenteditable spellcheck="false"></div>
		`
	}

	onInput(e) {
		console.log(e.target.textContent)
	}
	
	onClick(e) {
		console.log('Formula: onClick', e.target)
	}
	
}