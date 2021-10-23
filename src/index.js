import './scss/index.scss'
import { Excel } from '@/components/excel/Excel'
import { HeaderComponent } from '@/components/header/Header'
import { ToolbarComponent } from '@/components/toolbar/Toolbar'
import { FormulaComponent } from '@/components/formula/Formula'
import { TableComponent } from '@/components/table/Table'

const excel = new Excel('#app', {
	components: [HeaderComponent, ToolbarComponent, FormulaComponent, TableComponent]
})
 
excel.render()

