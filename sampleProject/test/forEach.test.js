const assert = require('assert');
const {forEach} = require("../index");
const

let numbers;
beforeEach(()=>{
    numbers =[1,2,3];
});

it("should sum an array", () =>{
    const numbers = [1,2,3];


    let total = 0;
    forEach(numbers,(value)=>{
        total+=value;
    });

    assert.strict(total,6);
});

it('beforeEach is ran each time',() =>{
    assert.strictEqual(numbers.length,4);
});

 