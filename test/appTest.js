"use strict";

describe('Units', function() {

    context('Spy', function() {
        it('spy on a function', function() {
            var addSpy = sinon.spy(add());

            addSpy(2, 4);

            expect(addSpy.called).to.be.true;

            addSpy.reset(); // reset spy to it's normal state
        });
    });

    context('Stub', function() {
        it('stub function', function() {
            var result;
            var isTruthyStub = sinon.stub(isTruthy()).returns(true);
            var obj = {
                "name": "John Doe",
                "age": 24
            };

            result = person('John Doe', 24);

            expect(result).to.be.deep.equal(obj);

            isTruthyStub.reset(); // reset spy to it's normal state
        })
    });

    context('Mock', function() {
        it('mock function', function() {
            var multiplyMock = sinon.mock(obj);

            multiplyMock.expects('foo').once();

            obj.foo();

            multiplyMock.verify();
        });
    });

});

"use strict";

describe('Cart', function() {
    describe('checkout', function() {
        it('User apply promo code', function() {
            
        });
        it('User doesn\'t aply promo code', function() {
            
        });
    })
});