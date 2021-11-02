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
					<h4>About Concinnity</h4>
						<p>
							Concinnity is a trusted partner in enabling organisations to
							develop and realise their vision for success. We provide the
							constellations of distinctive advantages organisations need for
							enhanced performance and sustained growth.
						</p>
					</div>
					<div class="col-12 col-md-3">
						<h4>Contact Us</h4>
						<p>11 Unity Road, First Floor
						Off Toyin Street Ikeja,
						Lagos Nigeria 100271. </p>
						<p>Tel: +234 816 479 8551</p>
						<p>Tel: +234 815 366 6663</p>
						<p>Email: info@concinnityng.com</p>
					</div>
				</div>
				<p>2021 &copy; Concinnity</p>
			</div>
		</footer>
    `
	}
}

customElements.define('footer-component', Footer)
