class Dom {
	constructor(selector) {
		this.$el = typeof selector === 'string' 
			? document.querySelector(selector)
			: selector
	}

	html(lay) {

		if (typeof lay === 'string') {
			this.$el.innerHTML = lay
			return this
		}

		return this.$el.outerHTML.trim()

	}

	text(text) {

		if (typeof text === 'string') {
			this.$el.innerHTML = text
			return this
		}
		if (this.$el.tagName.toLowerCase() === 'input') {
			return this.$el.value.trim()
		}
		return this.$el.textContent.trim()
	}

	on(eventType, cb) {
		this.$el.addEventListener(eventType, cb)
	}

	off(eventType, cb) {
		this.$el.removeEventListener(eventType, cb)
	}

	clear() {
		this.html('')
		return this
	}

	append(node) {
		if (node instanceof Dom) {
			node = node.$el
		}

		if (Element.prototype.append) {
			this.$el.append(node)
		} else {
			this.$el.appendChild(node)
		}

		return this
	}

	closest(selector) {
		return $(this.$el.closest(selector))
	}

	get data() {
		return this.$el.dataset
	}

	css(styles = {}) {
		// for (const keyStyle in styles) {
		// 	if (styles.hasOwnProperty(keyStyle)) {
		// 		this.$el.style[keyStyle] = styles[keyStyle]
		// 	}
		// }
		Object.keys(styles).forEach(key => {
			this.$el.style[key] = styles[key]
		})
	}

	getCoords() {
		return this.$el.getBoundingClientRect()
	}

	findAll(selector) {
		return this.$el.querySelectorAll(selector)
	}

	find(selector) {
		return $(this.$el.querySelector(selector))
	}

	addClass(className) {
		this.$el.classList.add(className)
		return this
	}

	removeClass(className) {
		this.$el.classList.remove(className)
		return this
	}

	id(parse) {
		if (parse) {
			const parsed = this.id().split(':')
			return {
				row: +parsed[0],
				col: +parsed[1]
			}
		}
		return this.data.id

	}

	focus() {
		this.$el.focus()
		return this
	}

}


export function $(selector) {
	return new Dom(selector)
}

$.create = (tagName, className = '') => {
	const el = document.createElement(tagName)
	if (className) {
		el.classList.add(className)
	}

	return $(el)
}