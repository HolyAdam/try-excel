import { ExcelComponent } from '@core/ExcelComponent'

export class ToolbarComponent extends ExcelComponent {

	static className = 'excel__toolbar'

	constructor($root, options = {}) {
		super($root, {
			name: 'Toolbar',
			listeners: ['input', 'click'],
			...options
		})
	}

	onClick(e) {
		console.warn('click toolbar')
	}

	onInput(e) {
		console.warn('click onInput')
	}

	toHTML() {
		return `

			<div class="button">
			  <i class="material-icons">format_align_left</i>
			</div>

			<div class="button">
			  <i class="material-icons">format_align_center</i>
			</div>

			<div class="button">
			  <i class="material-icons">format_align_right</i>
			</div>

			<div class="button">
			  <i class="material-icons">format_bold</i>
			</div>

			<div class="button">
			  <i class="material-icons">format_italic</i>
			</div>

			<div class="button">
			  <i class="material-icons">format_underlined</i>
			</div>
	
		`
	}
	
}