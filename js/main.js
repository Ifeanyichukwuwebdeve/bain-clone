const showOffice = () => {
	// console.log('Fired')
	const dropOffice = document.getElementById('drop-office')
	if (dropOffice.style.display === 'none') {
		dropOffice.style.display = 'block'
		document.getElementById('office-icon').style.transform = `rotate(180deg)`
		return
	} else {
		dropOffice.style.display = 'none'
		document.getElementById('office-icon').style.transform = `rotate(1deg)`
	}
}

// Code for sliders
const silderImg = document.getElementById('slideImg')

const images = new Array(
	'img/businesses.jpg',
	'img/calculate.jpg',
	'img/investments.jpg'
)

const len = images.length

let i = 0
function slider() {
	if (i > len - 1) {
		i = 0
	}
	silderImg.src = images[i]
	i++
	setTimeout('slider()', 6000)
}

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
