"use stric";

/**
 * Cart class/constructor
 * @param {[number]} price     [item price]
 * @param {[string]} promoCode [promo code]
 */
function Cart(price, promoCode) {
    this.hardCodedPromoCode = 'HAHA';
    this.price = price;
    this.totalPrice = price;
    this.promoCode = promoCode;

    this.checkout();
}

Cart.prototype.applyPromoValue = function (promoValue) {
    this.totalPrice = this.price - promoValue;
    this.render();
};

/**
 * Get promo code value to be applied
 * @method getPromoValue
 */
Cart.prototype.getPromoValue = function () {
    var promoValue;
    var url = 'https://private-3d52c-promocode.apiary-mock.com/promo-code';

    $.ajax(url, {
        async: false,
        success: function(data) {
            promoValue = data.value
        },
        error: function(err) {
            console.log('fetching failed', err);
            promoValue = 0;
        }
    });

    return promoValue;
};

Cart.prototype.validatePromoCode = function () {
    var promoValue = 0;
    var promoCode = this.promoCode;

    if (promoCode === this.hardCodedPromoCode) {
        promoValue = this.getPromoValue();
        this.applyPromoValue(promoValue);
    } else {
        this.applyPromoValue(promoValue);
    }

};

Cart.prototype.render = function () {
    var elTotalPrice = document.querySelector('#totalPrice-view');
    elTotalPrice.innerHTML = this.totalPrice.toFixed(2);
};

Cart.prototype.checkout = function () {
    this.validatePromoCode();
};