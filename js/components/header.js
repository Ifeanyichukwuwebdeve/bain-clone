class Header extends HTMLElement {
	constructor() {
		super()
	}
	connectedCallback() {
		this.innerHTML = `
      <header>
        <nav class="main-nav">
          <div class="container-fluid">
            <div class="top-head">
            <ul class="top-head-list">
              <li class="top-head-item">
                <a href="about.html">OFFICE <i class="fas fa-caret-down"></i></a>
                <section class"drop-office">
                  <h3>Offices</h3>
                  <div>
                    <div class="col-12 col-md-4"></div>
                    <div class="col-12 col-md-4"></div>
                    <div class="col-12 col-md-4"></div>
                  </div>
                </section>
              </li>
              <li class="top-head-item"><a href="#">ALUMNI</a></li>
              <li class="top-head-item"><a href="#">MEDIA CENTER</a></li>
              <li class="top-head-item"><a href="#">SUBSCRIBE</a></li>
              <li class="top-head-item"><a href="#">CONTACT</a></li>
            </ul>
            <ul class="top-head-list">
              <li class="top-head-item"><a href="#"><i class="fas fa-globe"></i> GOLBAL | ENGLISH <i class="fas fa-caret-down"></i></a></li>
              <li class="top-head-item"><a href="#"><i class="far fa-folder"></i> RED FOLDER <i class="fas fa-caret-down"></i></a></li>
            </ul>
          </div>
          </div>
        </nav>
      </header>
    `
	}
}

customElements.define('nav-component', Header)
