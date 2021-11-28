export let newName;
export let newEmail;
export let newAddress;
export let newData;
export let called = 0;
export let oldName;
export let oldEmail;
export let oldAddress;

export const deleteThis = id => {
    fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        })
        .then(function (data) {
            return data.json();
        })
        .then(console.log("Delete user is success."))
        .catch(function (err) {
            console.log("DELETE fetch problem show: " + err.message);
        });
};

export const editThis = id => {
    called++;
    if (called === 1) {
        document.querySelector("#editButton_" + id).style.display = 'none';
        document.querySelector("#deleteButton_" + id).style.display = 'none';
        document.querySelector("#saveButton_" + id).style.display = 'inline';
        document.querySelector("#restoreButton_" + id).style.display = 'inline';
        oldName = document.querySelector("#name_" + id).textContent;
        oldEmail = document.querySelector("#email_" + id).textContent;
        oldAddress = document.querySelector("#address_" + id).textContent;
        document.querySelector("#name_" + id).setAttribute("contentEditable", true);
        document.querySelector("#email_" + id).setAttribute("contentEditable", true);
        document.querySelector("#address_" + id).setAttribute("contentEditable", true);
    } else {
        message("You must finish your editings first!", false);
        called++;
    }

};

export const checkString = (string = '', isItEmail = false) => {
    const stringRegex = /^[a-z0-9- .]+$/
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    const lowerCase = string.toLocaleLowerCase();

    if (isItEmail !== true && stringRegex.test(lowerCase)) {
        return true;
    } else if (isItEmail && emailRegex.test(lowerCase)) {
        return true;
    } else {
        return false;
    }
};

export const update = async id => {
    newName = document.querySelector("#name_" + id).textContent.replace(/[\n\t\r]/g, "");
    let newNameVerdict = checkString(newName, false);
    newEmail = document.querySelector("#email_" + id).textContent.replace(/[\n\t\r]/g, "");
    let newEmailVerdict = checkString(newEmail, true);
    newAddress = document.querySelector("#address_" + id).textContent.replace(/[\n\t\r]/g, "");
    let newAddressVerdict = checkString(newAddress, false);
    console.log(newName, newEmail, newAddress);
    console.log(newNameVerdict, newEmailVerdict, newAddressVerdict);

    if (newNameVerdict && newEmailVerdict && newAddressVerdict) {
        message('Hello! The entered data are valid. We saved them to the database already!', true);

        newData = {
            id: `${id}`,
            name: `${newName}`,
            emailAddress: `${newEmail}`,
            address: `${newAddress}`,
        };
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        }).then(response => {
            return response.json()
        }).then(data =>
            console.log(data)
        ).catch(function (err) {
            console.log("PUT method fetch problem show: " + err.message);
        });
    } else {
        message("Hello! The entered data seems not valid. Please try again! The original data was restored.", false);
        ratherNotEdit(`${id}`);
    }
    weAreNotEditRowAtTheMoment(`${id}`);
    called = 0;
};

export const read = () => {
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
							<td id="name_${data.id}"> ${data.name}</</h6>
							<td id="email_${data.id}"> ${data.emailAddress}</td>
							<td id="address_${data.id}"> ${data.address}</td>
							<td> <button type="button" a tabindex="0" href="javascript:void(0);" id="editButton_${data.id}" class="editButton" onclick="editThis(${data.id})">Edit</button> <button type="button" id="deleteButton_${data.id}" a tabindex="0" href="javascript:void(0);" class="deleteButton" onclick="deleteThis(${data.id});">Delete</button> <button type="button" id="saveButton_${data.id}" a tabindex="0" href="javascript:void(0);" class="saveButton" onclick="update(${data.id})">Save</button> <button type="button" id="restoreButton_${data.id}" a tabindex="0" href="javascript:void(0);" class="restoreButton" onclick="ratherNotEdit(${data.id});">Cancel</button></td>
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
};

export const ratherNotEdit = id => {
    document.querySelector("#editButton_" + id).style.display = 'inline';
    document.querySelector("#deleteButton_" + id).style.display = 'inline';
    document.querySelector("#saveButton_" + id).style.display = 'none';
    document.querySelector("#restoreButton_" + id).style.display = 'none';
    document.querySelector("#name_" + id).setAttribute("contentEditable", false);
    document.querySelector("#email_" + id).setAttribute("contentEditable", false);
    document.querySelector("#address_" + id).setAttribute("contentEditable", false);
    document.querySelector("#name_" + id).innerText = oldName;
    document.querySelector("#email_" + id).innerText = oldEmail;
    document.querySelector("#address_" + id).innerText = oldAddress;
    called = 0;
};