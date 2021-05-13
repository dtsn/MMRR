const actions = document.querySelectorAll('.action');

actions.forEach((button) => {
	button.addEventListener('click', () => {
		button.classList.add('loading');
		fetch(`/api/${button.getAttribute('data-path')}`).then(() => {
			button.classList.remove('loading');
		});
	});
});