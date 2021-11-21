function noNeedMsg() {
	alert("It is no need to push the button. Just begin to type into the searchbar.:)");
}

function search_character() {
	let input = document.getElementById('searchbar').value
	input = input.toLowerCase();
	let x = document.getElementsByClassName('charCard');

	let countNumber;
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		} else {
			x[i].style.display = "block";
		}
	}
}

fetch("./assets/json/got.json")
	.then(function (response) {
		return response;
	})
	.then(function (data) {
		return characters = data.json();
	})
	.then(function (Normal) {
		document.getElementById("con").innerHTML = Normal.filter(character => !(character.dead === true))
			.sort(function (a, b) {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			})
			.map((data) => {
				return `<div class='charCard' id='${data.name}'> 
				<img 
				 onmouseover="makeRed('${data.name}')"
				 onmouseout="makeNormal('${data.name}')" 
				 src="./assets/${data.portrait}" 
				 alt="A Game of Thrones character" 
				 onclick="selectCharacter(\'${data.name}\');makeBold(\'${data.name}\');"
				 width="90"
				/>
				<h4 class="allCharNames">${data.name  || 'Character not found.'}</h4>
	</div>`
			}).join('');
		console.log(characters);

	})
	.catch(function (err) {
		console.log("Fetch problem show: " + err.message);
	});


let selectCharacter = (charName = 'Brienne') => {
	fetch("./assets/json/got.json")
		.then(function (response) {
			return response;
		})
		.then(function (data) {
			return data.json();
		})
		.then(function (Normal) {
			document.getElementById("charDetails").innerHTML = Normal.filter(character => character.name === charName)
				.map(
					(data) => {
						return `<div>
						<img class="portraitSelected" src="./assets/${data.picture}" alt="A Game of Thrones character" width="500" >
							<h4 class="selCharName"> ${data.name  || 'Character not found.'} <img class="houseMedal" src="./assets/assets/houses/${data.house}.png" alt="${data.house}" width="30" ></h4> 
							<h4>${data.bio|| 'No bio found.' }</h4>
						</div>`;
					}
				);
		})
		.catch(function (err) {
			console.log("Fetch problem show: " + err.message);
		});
}

function makeBold(charName) {
	let TextBox = document.getElementById(charName);
	TextBox.style.fontFamily = "Roboto', sans-serif";
	TextBox.style.fontWeight = "900";

}

function makeRed(charName) {
	let TextBox = document.getElementById(charName);
	TextBox.style.color = "red";
}

function makeNormal(charName) {
	let TextBox = document.getElementById(charName);
	TextBox.style.fontFamily = "GOT, sans-serif";
	TextBox.style.color = "#81695f";
}