class Footer extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.innerHTML = `
      <footer>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <ul class="social-row">
          <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
          <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </footer>
    `
	}
}

customElements.define('footer-component', Footer)
