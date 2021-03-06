const selectElement = function (element) {
	return document.querySelector('element');
};

const body = selectElement('body');
const menuToggler = document.querySelector('.open');
menuToggler.addEventListener('click', function () {
	let body = document.querySelector('body');
	body.classList.toggle('active');
});

const ScrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};