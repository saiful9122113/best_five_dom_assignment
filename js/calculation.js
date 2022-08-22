
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getFloatInputValue('per-player-price');

    const previousPlayerExpense = getFloatInnerText('total-player-expense');

    let parentNode = document.getElementById('ol');
    let directChildren = parentNode.children.length;
    // console.log(directChildren);
    const totalPlayerExpense = perPlayerCost * directChildren;
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

}, { once: true });