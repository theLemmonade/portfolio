const body = document.body;
const title = document.querySelector('#title');
let toggleBtn = document.querySelector('#toggleBtn')
const container = document.querySelector('#container');
const message = `>_ portfolio-site:~ --u root -p
>_ Enter Password: **********
>_
>_ Welcome.`;
let isDark = false;
let n;

function rerun(){
  title.textContent = '';
  n = 0;
  typist(message, title);
};

rerun();

function interval(letter){
	console.log(letter);
	if(letter == ';' || letter == '.' || letter == ','){
		return Math.floor((Math.random() * 250) + 250);
	} else {
		return Math.floor((Math.random() * 70) + 5);
	}
}

function typist(text, target){
	if(typeof(text[n]) != 'undefined'){
		target.textContent += text[n];
	}
	n++;
	if(n < text.length){
		setTimeout(function(){
			typist(text, target)
		}, interval(text[n - 1]));
	} 
}

function display(){
  console.log('waited 6s, hiding title, displaying page')
  title.setAttribute('style', 'display: none')
  container.setAttribute('style', 'display: block')
}

setTimeout(() => {display();}, 6000);

function darkmode(){
	body.classList.toggle('dark-mode');
	if (isDark == true) {
		toggleBtn.innerHTML = 'dark <i class="bi bi-moon"></i>';
		toggleBtn.setAttribute('style', 'color: #333; border-color: #333;');
		isDark = false;
	} else {
		toggleBtn.innerHTML = 'light <i class="bi bi-sun"></i>';
		toggleBtn.setAttribute('style', 'color: lime; border-color: lime;');
		isDark = true;
	} return;
}

toggleBtn.addEventListener('click', darkmode);