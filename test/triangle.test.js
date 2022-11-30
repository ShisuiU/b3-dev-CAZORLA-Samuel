const Triangle = require('../src/triangle').Triangle;
const expect = require('chai').expect;

describe('Testing the Triangle Functions', function() {
    it('1. The side length of the Triangle', function(done) {
        let c1 = new Triangle(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });

    it('2. The surface area of the Triangle', function(done) {
        let c2 = new Triangle(7);
        expect(c2.getSurfaceArea()).to.equal(21.217622392718745);
        done();
    });

});