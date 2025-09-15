// DOM - DOCUMENT OBJECT MODEL.
// THE 3 MUSKETEERS OFWEB DEV:
// HTML => STRUCTURE, CSS => STYLE, JS => LOGIC

// STARTER CODE:
console.log("hello!");
alert("NED UNIVERSITY");

// starter code:
// <style> tag connects HTML with CSS
// <script> tag connects HTML with JS

// WINDOW OBJECT:
// THE WINDOW OBJECT REPRESENTS AN OPEN WINDOW IN A BROWSER. IT IS BROWSER'S 
// OBJECT (NOT JAVASCRIPT'S) & IS AUTOMATICALLY CREATED BY BROWSER.

// IT IS A GLOBAL OVBJECT WITH LOTS OF PROPERTIES & METHODS.
console.log(window);
console.log("hello");
window.console.log("hello2");
window.alert("hello");

// WHAT IS DOM?
// WHEN A WEB PAGE IS LOADED, THE BROWSER CREATES A DOCUMENT OBJECT MODEL (DOM)
// OF THE PAGE.
// WINDOW => DOCUMENT => HTML HAS TWO CATEGORIES: 1ST: HEAD, 2ND: BODY
// HEAD HAS META, META, TITLE, LINK. BODY HAS DIV, SCRIPT
// DIV HAS img, h1, p, div
// for output: use console:
// Window
// console.dir(window.document)
console.dir(document.body);
console.log(document.head);

// DOM IS A TREE LIKE STRUCTURE.
console.dir(document.body.childNodes[1]);
console.dir(document.body.childNodes[3].innerText = "abcd");

// JS HAS DYNAMIC CHANGES.
// FOR CONSOLE:
document.body.style.background = "green";

// DOM USE FOR DYNAMIC CHANGES MANIPULATION => DOM
// DOM MANIPULATION:
// SELECTING WITH ID:
document.getElementById("myId")
// SELECTING WITH CLASS:
document.getElementsByClassName("myClass")
// SELECTING WITH TAG:
document.getElementsByTagName("p")

// when we include body befoe script, dom elements will not be include.
// console.dir(document.body);

// for id:
let heading = document.getElementById("heading"); //h1
console.dir(heading);

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);


//LET'S PRACTICE:
// Q: CREATE A H2 HEADING ELEMENT WITH TEXT - "HELLO JAVASCRIPT". APPEND "FROM APNA COLLEGE STUDENTS"
// TO THIS TEXT USING JS.
// FOR INTELLECT: 1. ACCESS ELEMENT 2. PROPERTY -> CHANGE.
// h2 -> "HELLO JS FROM AC STUDENTS"
// for index.html:
<body>
    <h2>Hello JavaScript!</h2>
    <script src="script.js"></script>
</body>

// for script.js:

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from NED University students";

// Q: CREATE 3 divs WITH COMMON CLASS NAME - "BOX". ACCESS THEM & ADD SOME UNIQUE 
// OF THEM.

// FOR index.html:
<body>
    <h2>Hello JavaScript!</h2>
    <div class="box">first div</div>
    <div class="box">second div</div>
    <div class="box">third div</div>
    <script src="script.js"></script>
</body>
// FOR SCRIPT.JS:
.box {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    margin: 5px;
    text-align: center;
    background-color: aquamarine;
}
// for script.js:
let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}