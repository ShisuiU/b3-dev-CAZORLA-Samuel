class Triangle {
    constructor(length) {
        this.length = length;
    }

    getSideLength () {
        return this.length;
    }

    getSurfaceArea () {
        return (Math.sqrt(3)/4)*Math.pow(this.length, 2) ;
    }
}

module.exports = {
    Triangle:Triangle
}