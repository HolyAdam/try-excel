import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'

export class TableComponent extends ExcelComponent {

	static className = 'excel__table'

	toHTML() {
		return createTable(10)
	}
	
}