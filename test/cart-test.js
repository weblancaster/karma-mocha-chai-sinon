'use strict';

describe('Cart', function() {
    beforeEach(function() {
        // add html fixture to mocha
        var fixture = '<form><label> <input type="text" name="promoCode" placeholder="enter your promo code" id="promoCode"> </label> <input type="hidden" name="price" id="price" value="50.00"> <button type="submit" id="submit">Apply</button> </form><p>Price: <strong>$50.00</strong></p> <p>Total price with promo code applied:<strong>$<span id="totalPrice-view">50.00</span></strong></p>'

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture
        );
    });

    describe('Checkout', function() {
        it('apply promo code to price', function() {
            expect(1).to.be.ok;
        });
    });
});