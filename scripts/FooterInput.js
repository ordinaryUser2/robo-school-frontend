class Footer {
	selectors = {
		root: '[data-js-footer-form]',
		inputElement: '[data-js-input-element-tel]'
	}

	constructor() {
		this.rootElement = document?.querySelector(this.selectors.root);
		this.inputElementTel = this.rootElement?.querySelector(this.selectors.inputElement);
		if (!this.rootElement || !this.inputElementTel) {
			console.error('Footer form or footer input element not found')
		}

		this.bindEvents();
	}

	onInputElementTelFocus = () => {
		this.inputElementTel.placeholder = '+7(___)-___-__-__';
	}

	outInputElementTelFocus = () => {
		if (this.inputElementTel.value === '') {
			this.inputElementTel.placeholder = 'Телефон';
		}
	}

	onInputElementTelClick = (event) => {
		event.stopPropagation();
		if (this.inputElementTel.value === '') {
			this.inputElementTel.value = '+7';
		};
	}

	onDocumentClick = () => {
		if (this.inputElementTel.value === '+7') {
			this.inputElementTel.value = ''
		}
	}
	
	bindEvents() {
		this.inputElementTel.addEventListener('mouseover', this.onInputElementTelFocus);
		this.inputElementTel.addEventListener('mouseout', this.outInputElementTelFocus);
		this.inputElementTel.addEventListener('focus', this.onInputElementTelFocus);
		this.inputElementTel.addEventListener('blur', this.outInputElementTelFocus);
		this.inputElementTel.addEventListener('click', this.onInputElementTelClick);
		document.addEventListener('click', this.onDocumentClick)
	}

	unbindEvents() {
		this.inputElementTel.removeEventListener('mouseover', this.onInputElementTelFocus);
		this.inputElementTel.removeEventListener('mouseout', this.outInputElementTelFocus);
		this.inputElementTel.removeEventListener('focus', this.onInputElementTelFocus);
		this.inputElementTel.removeEventListener('blur', this.outInputElementTelFocus);
		this.inputElementTel.removeEventListener('click', this.onInputElementTelClick);
		document.removeEventListener('click', this.onDocumentClick)
	}
}

export default Footer;