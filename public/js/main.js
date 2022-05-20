document.getElementById('button-up').addEventListener('click', scrollUp);
document.getElementById('button-what').addEventListener('click', clc);

function scrollUp() {
	var currentScroll = document.documentElement.scrollTop;

	if (currentScroll > 0) {
		window.requestAnimationFrame(scrollUp);
		window.scrollTo(0, currentScroll - currentScroll / 10);
	}
}

function clc(e) {}
///

buttonUp = document.getElementById('button-up');
buttonWhat = document.getElementById('button-what');

window.onscroll = function () {
	var scroll = document.documentElement.scrollTop;

	if (scroll > 400) {
		buttonUp.style.transform = 'scale(1)';
		buttonWhat.style.transform = 'scale(1)';
	} else if (scroll < 400) {
		buttonUp.style.transform = 'scale(0)';
		buttonWhat.style.transform = 'scale(0)';
	}
};
