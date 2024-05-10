const btn_seller = document.querySelector('.seller');
btn_seller.addEventListener('click', () => {
    alert('You have now entered the SC as a seller!!!')
});

const btn_buyer = document.querySelector('.buyer');
btn_buyer.addEventListener('click', () => {
    alert('You have now entered the SC as a buyer!!!')
});

const btn_deposit = document.querySelector('.deposit');
btn_deposit.addEventListener('click', () => {
    prompt('How much would you like to deposit?')
});

const btn_withdraw = document.querySelector('.withdraw');
btn_withdraw.addEventListener('click', () => {
    prompt('How much would you like to withdraw')
});