const { italic } = require("chalk");
const render = require("../../render");

const assert = require("assert");

it("has a text input",async ()=>{
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');

    assert(input);
});

it("shows a success message with a valid email",async() =>{
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');
    input.value = "asfaf@as.com";
    dom.window.document.querySelector('form').dispatchEvent(new dom.window.Event("submit"));

    const h1 = dom.window.document.querySelector('h1');

    assert.strictEqual(h1.innerHtml,'looks good');
});
it("shows a success message with a invalid email",async() =>{
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');
    input.value = "asfa";
    dom.window.document.querySelector('form').dispatchEvent(new dom.window.Event("submit"));

    const h1 = dom.window.document.querySelector('h1');

    assert.strictEqual(h1.innerHtml,"invalid email");
});
