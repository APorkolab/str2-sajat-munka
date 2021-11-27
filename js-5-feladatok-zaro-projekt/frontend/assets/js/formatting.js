export const weAreNotEditRowAtTheMoment = id => {
    document.querySelector("#editButton_" + id).style.display = 'inline';
    document.querySelector("#deleteButton_" + id).style.display = 'inline';
    document.querySelector("#saveButton_" + id).style.display = 'none';
    document.querySelector("#restoreButton_" + id).style.display = 'none';
    document.querySelector("#name_" + id).setAttribute("contentEditable", false);
    document.querySelector("#email_" + id).setAttribute("contentEditable", false);
    document.querySelector("#address_" + id).setAttribute("contentEditable", false);
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

export const message = (messageText = '', verdict = false) => {
    // get the mPopup
    const mpopup = document.getElementById('mpopupBox');
    mpopup.style.display = "block";
    document.getElementById("verdict").textContent = messageText;

    //set closing for 5 sec
    setTimeout(function () {
        document.getElementById('mpopupBox').style.display = 'none';
    }, 5000);

    //decide what color will be the modal
    if (verdict) {
        document.getElementById('mpopup-head').style.backgroundColor = "green";
        document.getElementById('mpopup-foot').style.backgroundColor = "green";
    } else {
        document.getElementById('mpopup-head').style.backgroundColor = "red";
        document.getElementById('mpopup-foot').style.backgroundColor = "red";
    }

    // get the close action element
    const close = document.getElementsByClassName("close")[0];

    document.getElementsByClassName("mpopup-main").innerText = messageText;

    // close the mPopup once close element is clicked
    close.onclick = function () {
        mpopup.style.display = "none";
    }

    // close the mPopup when user clicks outside of the box
    window.onclick = function (event) {
        if (event.target == mpopup) {
            mpopup.style.display = "none";
        }
    }
};
