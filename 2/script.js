const btn = document.querySelector('.btn-test');  
	btn.addEventListener('click', () => {
window.alert( 'Размер экрана' +  window.screen.width + 'x' +  window.screen.height);
});