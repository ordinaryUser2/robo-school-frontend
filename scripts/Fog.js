/*
	Этот модуль относится к модальному окну
	В модальных окнах есть псевдоэлемент after который создает эффект "тумана" внизу секции с инфой о тренере
*/

class Fog {

	selectors = {
		modalDescription: '[data-js-fog]',
	}

	stateClass = {
		hideAfter: 'hide-after',
	}

	constructor () {
		this.modalDescriptionElement = document.querySelectorAll(this.selectors.modalDescription);

		if (this.modalDescriptionElement.length === 0) {
			console.error('Modal description element not found');
			return;
		}

		this.bindEvents();
	}

	hideAfterCondition = () => {
		this.modalDescriptionElement.forEach(element => {
			if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
				element.classList.add(this.stateClass.hideAfter);
			} else {
				element.classList.remove(this.stateClass.hideAfter);
			}
		})
	}

	bindEvents() {
		this.modalDescriptionElement.forEach(descriptionElement => {
			descriptionElement.addEventListener('scroll', this.hideAfterCondition)
		});
	}

	unbindEvents() {
		this.modalDescriptionElement.forEach(descriptionElement => {
			descriptionElement.removeEventListener('scroll', this.hideAfterCondition)
		});
	}
}

export default Fog;