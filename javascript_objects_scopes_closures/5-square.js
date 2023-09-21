#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0){
            this.width = w;
            this.height = h;
        }
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }

    rotate () {
        [this.width, this.height] = [this.height, this.width];
    }

    double () {
        this.height *= 2;
        this.width *= 2;
    }
}

class Square extends Rectangle {
    constructor (size) {
        super(size, size);
    }
}
module.exports = Rectangle