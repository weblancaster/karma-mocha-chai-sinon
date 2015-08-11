"use strict";

describe('App', function() {

    describe('Math', function() {
        it('add 1 + 2 equal 3', function() {
            var result = add(1, 2);

            expect(result).to.be.equal(3);
        });

        it('multiply 4 * 2 equal 8', function() {
            var result = multiply(4, 2);

            expect(result).to.be.equal
        });
    });

    describe('Person', function() {
        it('return john doe age 24 obj', function() {
            var isTruthyStub = sinon.stub(isTruthy()).returns(true);
            var obj = {
                "name": "John Doe",
                "age": 24
            };

            var result = person('John Doe', 24);

            expect(result).to.be.deep.equal(obj);
        })
    });

});