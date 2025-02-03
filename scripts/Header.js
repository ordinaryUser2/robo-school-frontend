class Header {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
		phoneButton: '[data-js-header-phone-button]',
		anchors: '[data-js-header-link]',
	}

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);
		if (!this.rootElement) {
			console.error('Root element not found');
			return;
		}

		this.overlayElement = this.rootElement?.querySelector(this.selectors.overlay);
		this.burgerButtonElement = this.rootElement?.querySelector(this.selectors.burgerButton);
		if (!this.overlayElement || !this.burgerButtonElement) {
			console.error('Burger button or overlay element not found');
			return;
		}

		this.phoneButtonElement = this.rootElement?.querySelector(this.selectors.phoneButton);
		if (!this.phoneButtonElement) {
			console.error('Phone button element not found');
		}

		this.anchorElement = this.rootElement?.querySelectorAll(this.selectors.anchors);
		if (!this.anchorElement) {
			console.error('Anchors elements not found');
			return;
		}

		this.isMenuOpen = false;
		this.updateAtributes();

		this.bindEvents();
	}

	onBurgerButtonClick = () => {
		this.isMenuOpen = !this.isMenuOpen;
		
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
		this.overlayElement.classList.toggle(this.stateClasses.isActive);
		document.documentElement.classList.toggle(this.stateClasses.isLock);
		this.updateAtributes();
	}

	
	updateAtributes = () => {
		if (this.isMenuOpen) {
			this.burgerButtonElement.setAttribute('aria-label', 'Закрыть меню');
			this.burgerButtonElement.setAttribute('title', 'Закрыть меню');
		} else {
			this.burgerButtonElement.setAttribute('aria-label', 'Открыть меню');
			this.burgerButtonElement.setAttribute('title', 'Открыть меню');
		}
	}

	onPhoneButtonClick = () => {
		const phoneNumber = '+78000001122';
		window.location.href = `tel:${phoneNumber}`;
	}
	
	onAnchorClick = () => {
		this.burgerButtonElement.classList.remove(this.stateClasses.isActive);
		this.overlayElement.classList.remove(this.stateClasses.isActive);
		document.documentElement.classList.remove(this.stateClasses.isLock);

		this.isMenuOpen = false;
		this.updateAtributes();
	}
	
	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
		this.anchorElement.forEach(anchor => {
			anchor.addEventListener('click', this.onAnchorClick);
		});
		this.phoneButtonElement.addEventListener('click', this.onPhoneButtonClick);
	}

	unbindEvents() {
		this.burgerButtonElement.removeEventListener('click', this.onBurgerButtonClick);
		this.anchorElement.forEach(anchor => {
			anchor.removeEventListener('click', this.onAnchorClick);
		});
		this.phoneButtonElement.removeEventListener('click', this.onPhoneButtonClick);
	}
}

export default Header;