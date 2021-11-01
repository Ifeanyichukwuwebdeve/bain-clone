class Footer extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.innerHTML = `
      <footer class="footer">
			<div class="container">
				<div class="row justify-content-around">
					<div class="col-12 col-md-3"><img src="./img/logo.png" alt="" /></div>
					<div class="col-12 col-md-5">
					<h4>About us</h4>
						<p>
							Concinnity is a trusted partner in enabling organisations to
							develop and realise their vision for success. We provide the
							constellations of distinctive advantages organisations need for
							enhanced performance and sustained growth.
						</p>
					</div>
					<div class="col-12 col-md-3">
						<h4>Contact</h4>
						<p>T: +234 7011 5914 38</p>
						<p>E: hello@concinnity.com</p>
					</div>
				</div>
				<p>2021 &copy; Concinnity</p>
			</div>
		</footer>
    `
	}
}

customElements.define('footer-component', Footer)
