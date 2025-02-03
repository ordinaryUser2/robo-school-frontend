class DropdownList {

	selectors = {
		root: '[data-js-dropdown]',
		dropInitiator: '[data-js-dropdown-initiator]',
		dropList: '[data-js-dropdown-list]',
	}

	stateClass = {
		isActive: 'is-active',
	}

	constructor() {
		this.rooElement = document.querySelector(this.selectors.root);
		this.dropInitiatorElement = this.rooElement?.querySelectorAll(this.selectors.dropInitiator);
		this.dropListElement = this.rooElement?.querySelectorAll(this.selectors.dropList);

		if (!this.rooElement || !this.dropInitiatorElement.length || !this.dropListElement.length) {
			console.error('One or more required elements not found');
			return;
		}

		this.bindEvents();
	}

	onDropInitiatorElementClick = (event) => {
		this.dropListElement.forEach(listElement => {
			event.stopPropagation();
			listElement.classList.toggle(this.stateClass.isActive);
		});
	}

	onDocumentClick = (event) => {
		this.dropInitiatorElement.forEach(initiatorElement => {
			if (initiatorElement.contains(event.target)) {
				this.dropListElement.forEach(listElement => {
					listElement.classList.remove(this.stateClass.isActive);
				});
			}
		})
	}

	bindEvents() {
		this.dropInitiatorElement.forEach(initiatorElement => {
			initiatorElement.addEventListener('click', this.onDropInitiatorElementClick);
		});
		document.addEventListener('click', this.onDocumentClick);
	}

	unbindEvents() {
		this.dropInitiatorElement.forEach(initiatorElement => {
			initiatorElement.removeEventListener('click', this.onDropInitiatorElementClick);
		});
		document.removeEventListener('click', this.onDocumentClick);
	}

}

export default DropdownList;