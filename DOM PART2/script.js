//  DOM MANIPULATION:
// TTRIBUTES:
// getAttribute( attr ) //to get the attribute value
// setAttribute( attr, value ) //to set the attribute val th

// STYLE:
// node.style

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

console.log(para.setAttribute("class", "newClass"));

// if i want to green color in div:
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

div.style.fontSize = "26px";

div.innerText = "Hello!";
// for create a button:
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

// DOM MANIPULATION:
// INSERT ELEMENTS. let el = document.createElement("div")
// node.append( el ) //adds at the end of node (inside)
// node.prepend( el ) //adds at the start of node (inside)
// node.before( el ) //adds before the node (outside)
// node.after( el ) //adds after the node (outside)

