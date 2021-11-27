	class Crud {
		constructor() {}
		create() {
			let form = document.querySelector('createUser');
			let formData = new FormData(form);
			let newUser = JSON.stringify(Object.fromEntries(formData));
			let id = defineId();
			let final = [newUser.slice(0, 0), id, newUser.slice(0)].join('');
			document.querySelector("#finalData").innerHTML = final;

		}

		read() {
			fetch('http://localhost:3000/users/')
				.then(function (response) {
					return response;
				})
				.then(function (data) {
					return data.json();
				})
				.then(function (Normal) {
					const html = Normal
						.sort(function (a, b) {
							return b - a;
						})
						.map(
							(data) => `
					<tr>
							<td><strong> ${data.id} </strong></td>
							<td id="name_${data.id}"> ${data.name }</</h6>
							<td id="email_${data.id}"> ${data.emailAddress}</td>
							<td id="address_${data.id}"> ${data.address}</td>
							<td> <button type="button" a tabindex="0" href="javascript:void(0);" id="editButton_${data.id}" class="editButton" onclick="editThis(${data.id})">Szerkesztés</button> <button type="button" id="deleteButton_${data.id}" a tabindex="0" href="javascript:void(0);" class="deleteButton" onclick="deleteThis(${data.id});">Törlés</button> <button type="button" id="saveButton_${data.id}" a tabindex="0" href="javascript:void(0);" class="saveButton" onclick="update(${data.id})">Mentés</button> <button type="button" id="restoreButton_${data.id}" a tabindex="0" href="javascript:void(0);" class="restoreButton" onclick="ratherNotEdit(${data.id});">Visszavonás</button></td>
							</tr>`
						).join('');
					let header = `<tr>
				<th>Id</th>
				<th>Name</th>
				<th>E-mail address</th>
				<th>Address</th>
				<th>Operations</th>
			</tr>`;

					document.querySelector("#readedData").innerHTML = header + html;
				})
				.catch(function (err) {
					console.log("Fetch problem show: " + err.message);
				});
		}

		update(user, id) {
			fetch(Crud.prototype.path, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(user)
				})
				.then(function (data) {
					data.users
						.filter(user => user.id === id)
						.then(Crud.remove(id))
						.then(Crud.create(user));
					return data.json();
				})
				.then(data => console.log(data))
				.catch(function (err) {
					console.log("Fetch problem show: " + err.message);
				});
		}

		remove(id) {
			fetch(`http://localhost:3000/users/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					},
					body: '{}'
				})
				.then(function (data) {
					return data.json();
				})
				.then(data => console.log(data))
				.catch(function (err) {
					console.log("Fetch problem show: " + err.message);
				});
		}
	}

	function defineId() {
		fetch(`http://localhost:3000/users/`)
			.then(function (response) {
				return response;
			})
			.then(function (data) {
				return data.json();
			})
			.then(function (Normal) {
				const maxId = Normal.map(
					(data) => Math.max(...data)
				).join('');

				return maxId + 1;
			})
			.catch(function (err) {
				console.log("Fetch problem show: " + err.message);
			});
	}

	export default Crud;