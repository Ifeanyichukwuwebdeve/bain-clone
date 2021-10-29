const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	spaceBetween: 0,
	parallax: true,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar'
	}
})

// Code for sliders
// const silderImg = document.getElementById('slideImg')

// const images = new Array(
// 	'img/businesses.jpg',
// 	'img/calculate.jpg',
// 	'img/investments.jpg'
// )

// const len = images.length

// let i = 0
// function slider() {
// 	if (i > len - 1) {
// 		i = 0
// 	}
// 	silderImg.src = images[i]
// 	i++
// 	setTimeout('slider()', 6000)
// }

// Code for the side bar

const openCloseContent = (closeElement, openElement) => {
	document.querySelector(closeElement).style.display = 'none'
	document.querySelector(openElement).style.display = 'block'
}
const closeSidebar = () => {
	document.querySelector('.side-nav').style.display = 'none'
}
const openSideBar = () => {
	document.querySelector('.side-nav').style.display = 'flex'
}

window.onscroll = () => {
	if (window.scrollY > 200) {
		// document.querySelector('.top-head').style.display = 'none'
		document.querySelector('nav').classList.add('nav-scroll')
		document.querySelector('nav').classList.remove('nav-active')
	}
	if (window.scrollY < 200) {
		// document.querySelector('.top-head').style.display = 'flex'
		document.querySelector('nav').classList.add('nav-active')
		document.querySelector('nav').classList.remove('nav-scroll')
	}
}
