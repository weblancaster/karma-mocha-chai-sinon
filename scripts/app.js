"use stric";

;(function(window, undefined) {

    function startCheckout() {
        var total = document.querySelector('#price').value;
        var promocode = document.querySelector('#promoCode').value;
        var cart = new Cart(total, promocode);
    }
    
    function handleSubmit(){
        var submitButton = document.querySelector('#submit');

        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            startCheckout();
        }, false)
    }

    handleSubmit();
})(window);

function Cart(price, promoCode) {
    this.hardCodedPromoCode = 'HAHA';
    this.price = price;
    this.promoCode = promoCode;
 
    this.checkout();
}

/**
* Apply promo code and if accepted return 
* new value with promotion applied
* @param {[number|string]} val [description]
*/
Cart.prototype.getPromoValue = function() {
    var url = 'https://private-3d52c-promocode.apiary-mock.com/promo-code';

    return fetch(url)
      .then(function(response) {
        console.log('fetching promocode value...');
        return response.json()
      }).then(function(json) {
        return json.value;
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
}


Cart.prototype.validatePromoCode = function() {
    var that = this;
    var promoValue = 0;
    var promoCode = this.promoCode;
    
    if ( promoCode !== this.hardCodedPromoCode ) {
        this.applyPromoValue(promoValue);
    } else {
        this.getPromoValue()
            .then(function(val) {
                promoValue = val;
                that.applyPromoValue(promoValue);
            });
    }
}

Cart.prototype.applyPromoValue = function(promoValue) {
    console.log('promoValue', promoValue)
    var elTotalPrice = document.querySelector('#totalPrice-view');
    totalPrice = this.price - promoValue;
    elTotalPrice.innerHTML = totalPrice.toFixed(2);
}

Cart.prototype.checkout = function() {
    this.validatePromoCode();
}