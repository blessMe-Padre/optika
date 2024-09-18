export const initPopupOrders = () => {
    // Работа с продуктом и попапом

    const productImage = document.querySelector('.main-product-img');
    const productName = document.querySelector('.main-product__title');

    const popupOrder = document.querySelector('#popup2');
    const popupOrderImg = document.querySelector('.popup-order-img');
    const orderHiddenInput = popupOrder.querySelector('.popup-order-hidden-input');

    const popupOrderName = document.querySelector('.popup-order-name');
    const name = productName.innerText;

    popupOrderImg.src = productImage.src;
    popupOrderName.innerText = name;
    orderHiddenInput.value = name;
}