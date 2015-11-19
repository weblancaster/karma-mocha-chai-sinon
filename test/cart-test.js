'use strict';

describe('Cart', function () {
    var sandbox;

    before(function() {
        // add html fixture
        var fixture = '<form><label> <input type="text" name="promoCode" placeholder="enter your promo code" id="promoCode"> </label> <input type="hidden" name="price" id="price" value="50.00"> <button type="submit" id="submit">Apply</button> </form><p>Price: <strong>$50.00</strong></p> <p>Total price with promo code applied:<strong>$<span id="totalPrice-view">50.00</span></strong></p>'

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture
        );
    });

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe('Checkout', function () {
        var cart;

        context('when promo code applicable', function () {
            beforeEach(function() {
                var checkoutStub = sandbox.stub(Cart.prototype, 'checkout');
                var price = 30.00;
                var promoCode = 'HAHA';

                cart = new Cart(price, promoCode);
            });

            it('price exists', function () {
                expect(cart.price).to.be.equal(30);
            });

            it('promo code exists', function () {
                expect(cart.promoCode).to.be.equal('HAHA');
            });

            it('get promo code value', function() {
                var xhrStub = sandbox.stub($, 'ajax').yieldsTo('success', {
                    value: 20
                });

                var promoValue = cart.getPromoValue();

                expect(promoValue).to.be.equal(20);
            });

            it('validate promo code', function() {
                var xhrStub = sandbox.stub($, 'ajax').yieldsTo('success', {
                    value: 20
                });
                var applyPromoValueStub = sandbox.stub(cart, 'applyPromoValue');

                cart.validatePromoCode();

                expect(xhrStub.called).to.be.ok;
                expect(applyPromoValueStub.called).to.be.ok;
            });

            it('Apply promo code to price', function() {
                var renderStub = sandbox.stub(cart, 'render');
                var applyPromoValueSpy = sandbox.spy(cart, 'applyPromoValue');
                var promoValue = 20;

                cart.applyPromoValue(promoValue);

                expect(applyPromoValueSpy.calledWith(20)).to.be.ok;
                expect(cart.totalPrice).to.be.equal(10);
            });

            it('render formatted price in the view', function() {
                var promoValue = 20;
                cart.applyPromoValue(promoValue);
                var elTextContent = document.querySelector('#totalPrice-view').textContent;

                expect(elTextContent).to.be.equal('10.00');
            });
        });

    });
});