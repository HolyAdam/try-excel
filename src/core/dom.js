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