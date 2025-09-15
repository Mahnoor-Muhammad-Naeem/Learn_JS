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
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// DOM MANIPULATION:
// INSERT ELEMENTS. let el = document.createElement("div")
// node.append( el ) //adds at the end of node (inside)
// node.prepend( el ) //adds at the start of node (inside)
// node.before( el ) //adds before the node (outside)
// node.after( el ) //adds after the node (outside)

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);

// DELETE ELEMENT:
// node.remove() //removes the node

// for newheading:
let newHeading = document.createElement("hi");
newHeading.innerHTML = "<i>Hi, I am new!</i>"

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();

// append Child()
// remove Child()

// LET'S PRACTICE:
// Q: CREATE A NEW BUTTON ELEMENT. GIVE IT A TEXT "CLICK ME", BACKGROUND COLOR OF RED & TEXT COLOR
// OF WHITE.

// INSERT THE BUTTON AS THE FIRST ELEMENT INSIDE THE BODY TAG.      

// Q: CREATE A <p> tag IN HTML, GIVE IT A CLASS & SOME STYLING. 
// NOW CREATE A NEW CLASS IN CSS AND TRY TO APPEND THIS CLASS TO THE <p> ELEMENT.  

// DID YOU NOTICE, HOW YOU OVERWRITE THE CLASS NAME WHEN YOU ADD A NEW. 
// SOLVE THIS PROBLEM USING CLASSLIST.

// SOLUTION:
// FOR SCRIPT.JS:
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// for style.css:
.content {
    color:red;
}

.newClass {
    background-color: green;
}

//Q2, SOLUTION:
let para = document.querySelector("p");
// 
