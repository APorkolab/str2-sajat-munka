const selectCharacter = (charName) => {
	`<div class='picture'> 
		<img src="./assets/${charName.picture}" alt="A Game of Thrones character" width="300" >
		<h4> ${charName.name} <img src="./assets/assets/houses/${charName.house}.png" alt="(commoner)" width="30" ></h4>
			<h4>${charName.bio}</h4>
		</div>`
	document.getElementById("charDetails").innerHTML = charDetails;
}



const res = `<div> 
<img src="./assets/${charName.picture}" alt="A Game of Thrones character" width="300" >
<h4> ${charName.name} <img src="./assets/assets/houses/${charName.house}.png" alt="(commoner)" width="30" ></h4>
	<h4>${charName.bio}</h4>
</div>`
document.getElementById("charDetails").innerHTML = charDetails;

export {
	selectCharacter
};