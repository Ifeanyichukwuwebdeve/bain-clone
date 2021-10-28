class SideBarNav extends HTMLElement {
	constructor() {
		super()
	}
	connectedCallback() {
		this.innerHTML = `
      <div class="side-nav">
			<div class="side-container">
				<ul class="first-nav-element">
					<li class="logo">
						<a href="#" class="side-item-link"
							><img src="./img/logo.png" alt="logo"
						/></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.first-nav-element', '.about-nav-element')"
					>
						<a href="#" class="side-item-link"
							>ABOUT US <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.first-nav-element', '.capabilties-nav-element')"
					>
						<a href="#" class="side-item-link"
							>CAPABILITIES <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.first-nav-element', '.industrial-nav-element')"
					>
						<a href="#" class="side-item-link"
							>INDUSTRIES <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.first-nav-element', '.insights-nav-element')"
					>
						<a href="#" class="side-item-link"
							>INSIGHTS <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.first-nav-element', '.careers-nav-element')"
					>
						<a href="#" class="side-item-link"
							>CAREERS <i class="fas fa-caret-down"></i
						></a>
					</li>
					<hr />
				</ul>
				<!-- About contents -->
				<ul class="about-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.about-nav-element', '.first-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> Main menu</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">What We Believe</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">What We do</a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.about-nav-element', '.people-nav-element')"
					>
						<a href="#" class="side-item-link"
							>Our People & Leadership <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Corporate Citizenship</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Alliance Ecosystem</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Contact Concinnity</a>
					</li>
				</ul>
				<ul class="people-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.people-nav-element', '.about-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> ABOUT US</a
						>
					</li>
					<li class="side-item">
						<a href="./messageMD.html" class="side-item-link">oMessage from Our MD</a>
					</li>
				</ul>
				<!-- End of About -->
				<!-- CAPABILITIES -->
				<ul class="capabilties-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.capabilties-nav-element', '.first-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> Main menu</a
						>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.capabilties-nav-element', '.organize-nav-element')"
					>
						<a href="#" class="side-item-link"
							>ORGANISATION EFFECTIVENESS <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.capabilties-nav-element', '.human-nav-element')"
					>
						<a href="#" class="side-item-link"
							>HUMAN CAPITAL <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.capabilties-nav-element', '.customer-nav-element')"
					>
						<a href="#" class="side-item-link"
							>CUSTOMER ENGAGEMENT <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.capabilties-nav-element', '.sme-nav-element')"
					>
						<a href="#" class="side-item-link"
							>SME ADVISORY <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.capabilties-nav-element', '.digital-nav-element')"
					>
						<a href="#" class="side-item-link"
							>DIGITAL SOLUTIONS <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.capabilties-nav-element', '.research-nav-element')"
					>
						<a href="#" class="side-item-link"
							>RESEARCH & ANALYTICS <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.capabilties-nav-element', '.product-nav-element')"
					>
						<a href="#" class="side-item-link"
							>PRODUCTS <i class="fas fa-caret-down"></i
						></a>
					</li>
				</ul>
				<!-- ORGANIZE contents -->
				<ul class="organize-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.organize-nav-element', '.capabilties-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> ORGANISATION EFFECTIVENESS</a
						>
					</li>
					<li
						class="side-item"
						onclick="openCloseContent('.organize-nav-element', '.leadership-nav-element')"
					>
						<a href="#" class="side-item-link"
							>Leadership Development <i class="fas fa-caret-down"></i
						></a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">HR Solutions</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Talent Acquisition</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Group and Team Dynamics </a>
					</li>
				</ul>

				<ul class="leadership-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.leadership-nav-element', '.organize-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> Leadership Development</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Leadership Academy</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Leading from the Middle</a>
					</li>
				</ul>
				<!-- Human capital content -->
				<ul class="human-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.human-nav-element', '.capabilties-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> Human CAPITAL</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link"
							>Skills & Competency Development</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Learning & Development</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Educational Development </a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Distance Learning</a>
					</li>
				</ul>
				<!-- CUSTOMER ENGAGEMENT content -->
				<ul class="customer-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.customer-nav-element', '.capabilties-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> CUSTOMER ENGAGEMENT</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Strategic Marketing</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Service Excellence</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Loyalty Marketing</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Cause Marketing</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Customer Research</a>
					</li>
				</ul>
				<!-- SME ADVISORY content -->
				<ul class="sme-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.sme-nav-element', '.capabilties-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> SME ADVISORY</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Startup Clinic</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Enterprise Development</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">SME Financing</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link"
							>SME Capacity Building & Training</a
						>
					</li>
				</ul>
				<!-- DIGITAL SOLUTIONS content -->
				<ul class="digital-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.digital-nav-element', '.capabilties-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> DIGITAL SOLUTIONS</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Knowledge Management System</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Distance Learning</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">SME Digital Solutions</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Digital Skills & Capabilities</a>
					</li>
				</ul>
				<!-- RESEARCH & ANALYTICS content -->
				<ul class="research-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.research-nav-element', '.capabilties-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> RESEARCH & ANALYTICS</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Data & Analytics</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Marketing Research</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Customer Research</a>
					</li>
				</ul>
				<!-- PRODUCTS  content -->
				<ul class="product-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.product-nav-element', '.capabilties-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> PRODUCTS</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Leading from the Middle</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">LibStor</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">I-CANDO Digital Literacy</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">eSkill the Nation</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Leadership Academy</a>
					</li>
				</ul>

				<!-- End of Capabilityies -->

				<!-- industrial  content -->
				<ul class="industrial-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.industrial-nav-element', '.first-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> Main menu</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Industries We Serve</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Clients </a>
					</li>
				</ul>

				<!-- End of industrial -->

				<!-- insights  content -->
				<ul class="insights-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.insights-nav-element', '.first-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> Main menu</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Featured Highlights </a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Media Centre</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Resource Centre</a>
					</li>
				</ul>

				<!-- End of insights -->

				<!-- Careers  content -->
				<ul class="careers-nav-element">
					<li
						class="logo"
						onclick="openCloseContent('.careers-nav-element', '.first-nav-element')"
					>
						<a href="#" class="side-item-link"
							><i class="fas fa-caret-down"></i> Main menu</a
						>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Explore Our Culture</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Join Us</a>
					</li>
					<li class="side-item">
						<a href="#" class="side-item-link">Alumni Network</a>
					</li>
				</ul>

				<!-- End of Careers -->
			</div>
			<div class="close" onclick="closeSidebar()">
				<i class="fas fa-times"></i>
			</div>
		</div>
    `
	}
}

customElements.define('sidebar-nav-component', SideBarNav)
