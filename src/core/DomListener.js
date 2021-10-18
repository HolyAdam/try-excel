import {capitalize} from './utils'

export class DomListener {

	constructor($root, listeners = []) {
		if (!$root) {
			throw new Error('no root provided in DOM')
		}
		this.$root = $root
		this.listeners = listeners	
	}

	initListeners() {
		this.listeners.forEach(listener => {
			const method = giveCorrectMethod(listener)
			if (!this[method]) {
				throw new Error(`Method ${listener} is not implemented in ${this.name || ''} Component`)
			}
			this[method] = this[method].bind(this)
			this.$root.on(listener, this[method])
		})
	}

	removeListeners() {
		this.listeners.forEach(listener => {
			const method = giveCorrectMethod(listener)
			this.$root.off(listener, this[method])
		})
	}
	   
}

function giveCorrectMethod(eventName) {
	return 'on' + capitalize(eventName)
}