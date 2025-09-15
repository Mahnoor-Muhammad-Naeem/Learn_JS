let btn1 = document.querySelector("btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a); //26
// };

// btn1.onclick = () => {
//     console.log("HANDLER1");
//     let a = 25;
//     a++;
//     console.log(a); //26
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };



// let box = document.querySelector("div");
// dis.onmousehover = () => {
//     console.log("you are inside div");
// };

// for evt:
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

// EVENT LISTENERS:
// node.addEventListener( event, callback )
// node.removeEventListener( event, callback )
// NOTE: THECALLBACK REFERENCE SHOULD BE SAME TO REMOVE.

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// let div = document.querySelector("div");



// for four event handlers:
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler3");
});

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});

// for removeeventlistener:
btn1.removeEventListener("click", handler3);

// LET'S PRACTICE:
// Q: CREATE A TOGGLE BUTTON THAT CHANGES THE SCREEN TO DARK-MODE WHEN CLICKED & LIGHT-MODE WHEN CLICKED AGAIN.
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});