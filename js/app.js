
function getFloatInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

function getFloatInnerText(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function setValue(id) {
    return document.getElementById(id)
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getFloatInputValue('per-player-price');

    const previousPlayerExpense = getFloatInnerText('total-player-expense');

    const totalPlayerExpense = perPlayerCost * 5;
    const setExpense = setValue('total-player-expense');
    setExpense.innerText = totalPlayerExpense;
}, { once: true });


document.getElementById('btn-total-calculation').addEventListener('click', function () {
    const managerCost = getFloatInputValue('manager-cost');
    const coachingCost = getFloatInputValue('coaching-cost');

    const previousPlayerExpense = getFloatInnerText('total-player-expense');
    const previousTotalCost = getFloatInnerText('total-cost');

    const totalCost = previousPlayerExpense + managerCost + coachingCost;
    const setTotalExpense = setValue('total-cost');
    setTotalExpense.innerText = totalCost;

})