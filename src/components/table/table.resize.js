import { $ } from '@core/dom'

export function tableResizeHandler($root, event) {

			const $resizer = $(event.target)
			// const $parent = $resizer.$el.parentNode // bad	
			// const $parent = $resizer.$el.closest('.column') better but bad
			const $parent = $resizer.closest('[data-type="column"]')
			const ids = $parent.data.column

			const type = $resizer.data.resize

			const cells = $root.findAll(`[data-column="${ids}"]`)

			const coords = $parent.getCoords()

			const sideProp = type === 'column' ? 'bottom' : 'right'

			let value = null;

			$resizer.css({
				opacity: 1,
				zIndex: 5,
				[sideProp]: '-5000px'
			})



			document.onmousemove = e => {
				if (type === 'column') {
					const dt = e.pageX - coords.right
					value = coords.width + dt
					$resizer.css({
						right: -dt + 'px'
					})
				} else {
					const dtH = e.pageY - coords.bottom
					value = coords.height + dtH
					$resizer.css({
						bottom: -dtH + 'px'
					})
					// $parent.css({
					// 	height: dtHeight + 'px'
					// })
				}
			}

			document.onmouseup = () => {
				document.onmousemove = null
				document.onmouseup = null

				if (type === 'column') {
					$parent.css({
						width: value + 'px'
					})
					cells.forEach(el => el.style.width = value + 'px')
				} else {
					$parent.css({
						height: value + 'px'
					})
				}

				$resizer.css({
					opacity: 0,
					bottom: 0,
					right: 0
				})
			}
		
}