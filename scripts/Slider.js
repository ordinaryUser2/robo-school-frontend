class Slider {
	selectors = {
		root: '[data-js-sliders]',
		container: '[data-js-slider-container]',
		sliderPreview: '[data-js-slider-button-preview]',
		sliderNext: '[data-js-slider-button-next]',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);
		this.containerElement = this.rootElement?.querySelector(this.selectors.container);
		this.sliderPreviewElement = this.rootElement?.querySelector(this.selectors.sliderPreview);
		this.sliderNextElement = this.rootElement?.querySelector(this.selectors.sliderNext);

		if (!this.rootElement || !this.containerElement || !this.sliderPreviewElement || !this.sliderNextElement) {
			console.error('One or more required elements not found');
			return;
		}

		this.scrollAmount = 320;
		this.bindEvents();
	}

	onSliderPreviewClick = () => {
		this.scrollSlider(-this.scrollAmount);
	}

	onSliderNextClick = () => {
		this.scrollSlider(this.scrollAmount);
	}

	scrollSlider(amount) {
		this.containerElement.scrollBy({
			top: 0,
			left: amount,
			behavior: 'smooth',
		})
	}

	bindEvents() {
		this.sliderPreviewElement.addEventListener('click', this.onSliderPreviewClick)
		this.sliderNextElement.addEventListener('click', this.onSliderNextClick)
	}

	unbindEvents() {
		this.sliderPreviewElement.removeEventListener('click', this.onSliderPreviewClick)
		this.sliderNextElement.removeEventListener('click', this.onSliderNextClick)
	}
}

export default Slider;