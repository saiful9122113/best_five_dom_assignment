
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getFloatInputValue('per-player-price');
    validation('per-player-price', perPlayerCost);

    const previousPlayerExpense = getFloatInnerText('total-player-expense');

    let parentNode = document.getElementById('ol');
    let directChildren = parentNode.children.length;
    if (directChildren === 0) {
        alert("You should must select minimum one player");
        return;
    }
    const totalPlayerExpense = perPlayerCost * directChildren;
    const setExpense = setValue('total-player-expense');
    setExpense.innerText = totalPlayerExpense;
});


document.getElementById('btn-total-calculation').addEventListener('click', function () {
    const managerCost = getFloatInputValue('manager-cost');
    validation('manager-cost', managerCost);

    const coachingCost = getFloatInputValue('coaching-cost');
    validation('coaching-cost', coachingCost);

    const previousPlayerExpense = getFloatInnerText('total-player-expense');
    const previousTotalCost = getFloatInnerText('total-cost');

    const totalCost = previousPlayerExpense + managerCost + coachingCost;
    if (isNaN(totalCost)) {
        const setTotalExpense = setValue('total-cost');
        setTotalExpense.innerText = '';
        return;
    }
    const setTotalExpense = setValue('total-cost');
    setTotalExpense.innerText = totalCost;

});