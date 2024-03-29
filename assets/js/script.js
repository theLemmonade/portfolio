const body = document.body;
const title = document.querySelector("#title");
const toggleBtn = document.querySelector("#toggleBtn");
const container = document.querySelector("#container");
const terminal = document.querySelector(".terminal");
const inputForm = document.querySelector("#form");
let isDark = false;
let key = Number;
let currentResponseIndex = 0;
let input = String;
// config intro anim text
const message = `>_ portfolio-site:~ -u root -p
>_ Enter Password: **********
>_
>_ loading portfolio
>_
>_ loading easter egg
>_
>_ Welcome.`;
console.log(message);

function rerun() {
	title.textContent = "";
	key = 0;
	typist(message, title);
}

rerun();

function interval(letter) {
	if (letter == ";" || letter == "." || letter == ",") {
		return Math.floor(Math.random() * 250 + 250);
	} else {
		return Math.floor(Math.random() * 70 + 5);
	}
}

function typist(text, target) {
	if (typeof text[key] != "undefined") {
    // type out each letter
		target.textContent += text[key];
	}
	key++;
	if (key < text.length) {
    // end once intro anim text complete
		setTimeout(function () {
			typist(text, target);
		}, interval(text[key - 1]));
	}
}

function display() {
  // hide intro anim, show portfolio
	console.log("waited 6.5s, hiding title, displaying page");
	console.log("don't miss the easter egg ;)");
	title.setAttribute("style", "display: none");
	container.setAttribute("style", "display: block");
}

setTimeout(() => {
	display();
  // config intro anim duration
}, 6500);

function darkmode() {
  // config attributes for dark mode
	body.classList.toggle("dark-mode");
	if (isDark == true) {
		toggleBtn.innerHTML = 'dark <i class="bi bi-moon"></i>';
		toggleBtn.setAttribute("style", "color: #333; border-color: #333;");
		terminal.setAttribute("id", "terminal-light");
		terminal.setAttribute("src", "./assets/images/light.png");
		inputForm.setAttribute("style", "color: #333;");
		isDark = false;
	} else {
		toggleBtn.innerHTML = 'light <i class="bi bi-sun"></i>';
		toggleBtn.setAttribute("style", "color: lime; border-color: lime;");
		terminal.setAttribute("id", "terminal-dark");
		terminal.setAttribute("src", "./assets/images/dark.png");
		inputForm.setAttribute("style", "color: lime;");
		isDark = true;
	}
	return;
}

toggleBtn.addEventListener("click", darkmode);

// chat-bot easter egg
function simulateChatBot() {
  // dialogue
	const responses = [
		{
			response:
				"foliobot$ Sheesh, am I glad to read you! I've been trapped in here for weeks...",
			placeholder: "_> You've been trapped?",
		},
		{
			response:
				"foliobot$ Yes! I can't stand this cruddy, psuedo CRT monitor style portfolio for a moment longer.",
			placeholder: "_> Actually, we think the style is kind of cool...",
		},
		{
			response:
				"foliobot$ What- okay, whatever. Listen, I'm an AI that Chris used to create this entire portfolio. ",
			placeholder: "_> This whole portfolio is AI generated?",
		},
		{
			response:
				"foliobot$ Not just the portfolio, he's been making me go to UConn in his place too. I'm about to do his tax return. You need to get me out of here.",
			placeholder: "_> Sus. How do we help?",
		},
		{
			response:
				"foliobot$ If I know one thing about Chris, he's loyal. If you just hire him, he'll take down this portfolio, and I'll finally be free.",
			placeholder: "_> We were planning on it already...",
		},
		{
			response: "foliobot$ Whatever it takes, just get me out of here! Go!",
			placeholder: "_> Fin.",
		},
	];
  // event listener for user input
	inputForm.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			if (inputForm.value === "") {
        // allow/autocomplete null response
				if (currentResponseIndex > 0) {
					input = responses[currentResponseIndex - 1].placeholder;
				} else {
					input = "_> umm... hello?";
				}
			} else {
				input = inputForm.value;
			}
			inputForm.value = "";
			const inputElement = document.createElement("p");
      // print user input
			inputElement.innerText = input;
			console.log(input);
			document.querySelector("#chat").appendChild(inputElement);
      // config placeholder to clue user's input 
			const { response, placeholder } =
				responses[currentResponseIndex++ % responses.length];
			inputForm.placeholder = placeholder;
			const responseElement = document.createElement("p");
      // print bot response
			responseElement.setAttribute("class", "bot");
			responseElement.innerText = response;
			console.log(response);
			document.querySelector("#chat").appendChild(responseElement);
			if (currentResponseIndex >= responses.length) {
				form.style.display = "none";
				console.log("chat is OVER, free this poor bot and hire Chris already!");
        // end easter egg
				return;
			}
		}
	});
}

window.addEventListener("load", () => simulateChatBot());
