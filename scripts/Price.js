class Price {
	selectors = {
		cardList: '[data-js-price]',
		cards: '[data-js-price-card]',
	}

	stateClass = {
		isActive: 'is-active',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.cardList);
		this.cardPrice = this.rootElement.querySelectorAll(this.selectors.cards);

		if (!this.rootElement || !this.cardPrice.length) {
			console.error('Card list or price cards not found');
			return;
		}

		this.bindEvents();
	}

	onCardPriceClick = (event) => {
		this.cardPrice.forEach(card => {
			card.classList.remove(this.stateClass.isActive);
		});
		event.currentTarget.classList.add(this.stateClass.isActive);
	}

	onDocumentClick = (event) => {
		if (!this.rootElement.contains(event.target)) {
			this.cardPrice.forEach(card => {
				card.classList.remove(this.stateClass.isActive);
			});
		}
	}

	bindEvents() {
		this.cardPrice.forEach(card => {
			card.addEventListener('click', this.onCardPriceClick);
		});
		document.addEventListener('click', this.onDocumentClick);
	}

	unbindEvents() {
		this.cardPrice.forEach(card => {
			card.removeEventListener('click', this.onCardPriceClick);
		});
		document.removeEventListener('click', this.onDocumentClick);
	}
}

export default Price;