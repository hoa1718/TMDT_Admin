const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

window.onload=()=>{
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});}

window.onload
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});