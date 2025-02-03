class Disclaimer {
	selectors = {
		disclaimer: '[data-js-disclaimer]',
	}

	stateClass = {
		isActive: 'is-active',
	}

	constructor() {
		this.disclaimerElement = document.querySelector(this.selectors.disclaimer);
		if (!this.disclaimerElement) {
			console.error('Disclaimer element not found');
			return;
		}

		this.bindEvents();
	}

	onDisclaimerElementClick = (event) => {
		event.stopPropagation();
		this.disclaimerElement.classList.toggle(this.stateClass.isActive);
	}

	onDocumentClick = () => {
		this.disclaimerElement.classList.remove(this.stateClass.isActive);
	}

	bindEvents() {
		this.disclaimerElement.addEventListener('click', this.onDisclaimerElementClick);
		document.addEventListener('click', this.onDocumentClick);
	}

	unbindEvents() {
		this.disclaimerElement.removeEventListener('click', this.onDisclaimerElementClick);
		document.removeEventListener('click', this.onDocumentClick);
	}
}

export default Disclaimer;