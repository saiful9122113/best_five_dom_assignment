
// function for getting input-fields Float type value
function getFloatInputValue(id) {
    return parseFloat(document.getElementById(id).value);
};

// function for getting Text-fields Float type value
function getFloatInnerText(id) {
    return parseFloat(document.getElementById(id).innerText);
};

// function for set a value
function setValue(id) {
    return document.getElementById(id)
};

// function for getting innerText
function getInnerText(id) {
    return document.getElementById(id).innerText;
};

// function for select player & create order list with the basis criteria
function selectPlayer(btnId, nameId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const name = getInnerText(nameId);

        let directChildren = ol.children.length;
        if (directChildren < 5) {
            const newTag = document.createElement('li');
            newTag.textContent = name;
            ol.appendChild(newTag);

            const btnEnable = document.getElementById(btnId);
            btnEnable.setAttribute('disabled', true);

            var item = document.getElementById(btnId);
            item.setAttribute("style", "background-color:gray;");
        }
        else {
            alert("More than 5 players are not allowed");
            return;
        }
    });
};

// function for validation check 
function validation(id, variable) {
    let setCost = setValue(id);
    if (isNaN(variable) || variable < 1) {
        setCost.value = '';
        alert("Only Positive Number for all input-field & atleast one selected player is required for Calculate button");
        return;
    }
}