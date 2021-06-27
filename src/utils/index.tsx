export const formatNumber = (money: number) => {
    let moneyString = '';
    moneyString = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return moneyString;
};
