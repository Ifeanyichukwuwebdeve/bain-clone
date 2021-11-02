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
										<a href="#">CONTACT</a>
									</li>
									<li class="top-head-item"><a href="#">ALUMNI</a></li>
									<li class="top-head-item"><a href="#">ABOUT US</a></li>
								</ul>
								<ul class="top-head-list">
									<li class="top-head-item">
										<a href="#"><i class="fab fa-facebook"></i></a>
									</li>
									<li class="top-head-item">
										<a href="#"><i class="fab fa-twitter"></i></a>
									</li>
									<li class="top-head-item">
										<a href="#"><i class="fab fa-linkedin-in"></i></a>
									</li>
									<li class="top-head-item">
										<a href="#"><i class="fab fa-youtube"></i></a>
									</li>
								</ul>
							</div>
						</div>
						<div class="second-nav">
							<div class="wrapper">
								<div class="logo">
									<div class="flex-logo">
										<i class="fas fa-bars" onclick="openSideBar()"></i>
										<a href="./"><img src="./img/logo.png" alt="logo" /></a>
									</div>
								</div>
								<input type="radio" name="slider" id="menu-btn" />
								<input type="radio" name="slider" id="close-btn" />
								<ul class="nav-links">
									<li>
										<a href="#" class="desktop-item">ABOUT US </a>
										<input type="checkbox" id="showMega" />
										<div class="mega-box">
											<div class="content">
												<div class="row justify-content-center">
													<div class="col-6">
														<header><a href="#">What We Believe</a></header>
													</div>
													<div class="col-6">
														<header><a href="#">What We do</a></header>
													</div>
													<div class="col-6">
														<header>
															<a href="#">Our People & Leadership</a>
														</header>
														<ul class="mega-links">
															<li><a href="./messageMD.html">Message from Our MD</a></li>
														</ul>
													</div>
													<div class="col-6">
														<header>
															<a href="#">Corporate Citizenship</a>
														</header>
													</div>
													<div class="col-6">
														<header>
														<a href="#">Alliance Ecosystem</a>
														</header>
													</div>
													<div class="col-6">
														<header>
														<a href="#">Contact Concinnity</a>
														</header>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li class="capacity-overflow">
										<a href="#" class="desktop-item">CAPABILITIES</a>
										<input type="checkbox" id="showMega" />
										<div class="mega-box">
											<div class="content">
												<div class="row justify-content-center">
													<div class="col-3">
														<header>
															<a href="#">ORGANISATION EFFECTIVENESS </a>
														</header>
														<ul class="mega-links">
															<li>
															<header>
															<a href="#">Leadership Development</a>
															</header>
															</li>
															<ul class="leadership">
																<li><a href="#">Leadership Academy</a></li>
																<li><a href="#">Leading from the Middle</a></li>
															</ul>
															<li><a href="#">HR Solutions</a></li>
															<li><a href="#">Talent Acquisition</a></li>
															<li><a href="#">Group and Team Dynamics </a></li>
														</ul>
													</div>
													<div class="col-3">
														<header><a href="#">HUMAN CAPITAL </a></header>
														<ul class="mega-links">
															<li><a href="#">Learning & Development</a></li>
															<li>
																<a href="#">Skills & Competency Development </a>
															</li>
															<li><a href="#">Educational Development </a></li>
															<li><a href="#">Distance Learning</a></li>
														</ul>
													</div>
													<div class="col-3">
														<header><a href="#">CUSTOMER ENGAGEMENT</a></header>
														<ul class="mega-links">
															<li><a href="#">Strategic Marketing</a></li>
															<li>
																<a href="#">Service Excellence</a>
															</li>
															<li><a href="#">Loyalty Marketing</a></li>
															<li><a href="#">Customer Research</a></li>
														</ul>
													</div>
													<div class="col-3">
														<header><a href="#">SME ADVISORY</a></header>
														<ul class="mega-links">
															<li><a href="#">Startup Clinic</a></li>
															<li>
																<a href="#">Enterprise Development</a>
															</li>
															<li><a href="#">SME Financing </a></li>
															<li>
																<a href="#">SME Capacity Building & Training</a>
															</li>
														</ul>
													</div>
													<div class="col-4">
														<header><a href="#">DIGITAL SOLUTIONS</a></header>
														<ul class="mega-links">
															<li>
																<a href="#">Knowledge Management System</a>
															</li>
															<li>
																<a href="#">Distance Learning</a>
															</li>
															<li><a href="#">SME Digital Solutions</a></li>
															<li>
																<a href="#">Digital Skills & Capabilities</a>
															</li>
														</ul>
													</div>
													<div class="col-4">
														<header>
															<a href="#">RESEARCH & ANALYTICS</a>
														</header>
														<ul class="mega-links">
															<li><a href="#">Data & Analytics </a></li>
															<li>
																<a href="#">Marketing Research</a>
															</li>
															<li><a href="#">Customer Research</a></li>
														</ul>
													</div>
													<div class="col-4">
														<header><a href="#">PRODUCTS</a></header>
														<ul class="mega-links">
															<li><a href="#">Leading from the Middle </a></li>
															<li>
																<a href="#">LibStor</a>
															</li>
															<li><a href="#">I-CANDO Digital Literacy</a></li>
															<li><a href="#">eSkill the Nation</a></li>
															<li><a href="#">Leadership Academy</a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<a href="#" class="desktop-item">INDUSTRIES</a>
										<input type="checkbox" id="showMega" />
										<div class="mega-box">
											<div class="content">
												<div class="row justify-content-center">
													<div class="col-12">
														<header><a href="#">Industries We Serve</a></header>
														<header><a href="#">Clients</a></header>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<a href="#" class="desktop-item">INSIGHTS</a>
										<input type="checkbox" id="showMega" />
										<div class="mega-box">
											<div class="content">
												<div class="row justify-content-center">
													<div class="col-12">
														<header><a href="#">Featured Highlights</a></header>
														<header><a href="#">Media Centre</a></header>
														<header><a href="#">Resource Centre</a></header>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<a href="#" class="desktop-item">CAREERS</a>
										<input type="checkbox" id="showMega" />
										<div class="mega-box">
											<div class="content">
												<div class="row justify-content-center">
													<div class="col-12">
														<header><a href="#">Explore Our Culture</a></header>
														<header><a href="#">Join Us</a></header>
														<header><a href="#">Alumni Network</a></header>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
    `
	}
}

customElements.define('nav-component', Header)
