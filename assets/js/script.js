const title = document.querySelector('#title');
const container = document.querySelector('#container')
let n;
const message = `>_ portfolio-site:~ --user=root -p
>_ Enter Password: **********
>_ Welcome.`;
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