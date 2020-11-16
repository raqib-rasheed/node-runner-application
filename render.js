const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const render =async (filename) => {
    const filePath = path.join(process.cwd(),filename);
    
    const dom = await JSDOM.fromFile(filePath, {
        runScripts:"dangerously",
        resources:"usable"
    });
    new Promise((resolve,reject)=>
    {
      return dom.window.document.addEventListener("DOMContentLoaded",(event)=>{
            resolve(dom);
        });  
    })
};
module.exports =render;
