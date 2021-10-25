class Header extends HTMLElement {
	constructor() {
		super()
	}
	connectedCallback() {
		this.innerHTML = `
      
    `
	}
}

customElements.define('nav-component', Header)
