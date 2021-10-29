export class Emitter {
	constructor() {
		this.listeners = {}
	}

	// Уведомлять слушателей если они есть
	// 'focus' 'make-it-work' 'formula-down'
	// table.emit('table-sselect', {a: 1})
	emit(event, ...args) {
		if (!Array.isArray(this.listeners[event])) {
			return false
		}
		this.listeners[event].forEach(fn => fn(...args))
		return true
	}

	// on
	// Добавляем новый слушатель
	// formula.subscribe('table-sselect', () => {})
	subscribe(event, fn) {
		this.listeners[event] = this.listeners[event] || []
		this.listeners[event].push(fn)
		return () => {
			this.listeners[event] =
				this.listeners[event].filter(listener => listener !== fn)
		}
	}

}

// const emitter = new Emitter()

// const unsub = emitter.subscribe('adam', data => console.log(data))

// emitter.emit('adam', 'loh')

// setTimeout(() => {
// 	emitter.emit('adam', 'loh2')
// }, 2000)


// setTimeout(() => {
// 	unsub()
// }, 3000)

// setTimeout(() => {
// 	emitter.emit('adam', 'loh4')
// }, 4000)



