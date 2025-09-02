# Callbacks, Promises & Async/Await — Demo

This mini project demonstrates **callbacks**, **Promises**, and **async/await** in JavaScript. Open `index.html` in a browser and watch the Console output to follow each concept step-by-step. fileciteturn1file1

## Files
- `index.html` — minimal page that loads the script. fileciteturn1file1
- `app.js` — all demo snippets (sync logs, setTimeout, callbacks, promises, promise chaining, async/await). fileciteturn1file0

## How to run
1. Open `index.html` directly in your browser, or serve the folder with any static server.
2. Open **DevTools → Console** to see logs in order as the code executes. You’ll see synchronous lines first, then delayed logs from callbacks, Promises, and `async/await`. fileciteturn1file1

## What the code shows (guided tour)

### 1) Synchronous logs
The script starts with three immediate `console.log` calls (`"one"`, `"two"`, `"three"`). These appear first in the Console because they are synchronous. fileciteturn1file0

### 2) Timers (`setTimeout`)
Two variations of `setTimeout` print `"hello"` after short delays—once by passing a named function, once with an inline arrow function. This illustrates that timers schedule work on the event loop microtask queue after the current call stack unwinds. fileciteturn1file0

### 3) Callbacks as parameters
`calculator(1, 2, sum)` calls a function that *accepts a callback* and invokes it with `(a, b)`. Then the same pattern is repeated with an **inline** callback. This section illustrates higher‑order functions and callback style. fileciteturn1file0

### 4) Control flow & loops
A simple nested `if` prints `"middle"` for age `19`, and a nested loop builds the string `"01234"` for each outer iteration—useful for seeing how synchronous control flow interleaves with later async logs. fileciteturn1file0

### 5) Async with *callbacks*
`getDataCallback(id, next)` simulates fetching “data *id*” and then optionally calls `next()`. The nested calls (1 → 2 → 3) demonstrate **callback chaining** (“callback hell” in larger codebases). fileciteturn1file0

### 6) Promises (creation & consumption)
Two Promises (`promise1`, `promise2`) resolve successfully and are handled with `.then(...)`. You also see an initial `"I am a promise"` log printed when each Promise executor runs immediately. fileciteturn1file0

### 7) Promise chaining
`getDataPromise(id)` returns a Promise that resolves after logging `data id`. The code demonstrates:  
- handling a single Promise,  
- returning a Promise inside `.then(...)` to chain asynchronous steps, and  
- chaining multiple steps (1 → 2 → 3) that each wait for the previous to finish. fileciteturn1file0

### 8) `async/await`
`api()` returns a Promise that logs `"weather data"` and resolves. `getWeatherData()` awaits two calls to `api()`, and `getAllData()` awaits a sequence of `getDataPromise(1..3)`. This is the same flow as Promise chaining, expressed with `await` for readability. fileciteturn1file0

## Expected Console flow (high level)
1. Immediate sync logs appear first.  
2. Short‑delay timer logs (`hello`).  
3. Callback sequence logs (`getting data…`, `data 1`, `data 2`, …).  
4. Promise and Promise‑chain logs (`promise1 resolved…`, `data 1`, `success`, …).  
5. Async/await logs (`weather data`, then the awaited data steps). fileciteturn1file0

> **Note:** All Promise rejections are handled; there should be **no “Uncaught (in promise)”** errors. If you use a live‑reload dev server, you may still see a yellow *deprecation* warning injected by the server itself—this is unrelated to the script. fileciteturn1file1

## Extend the demo
- Introduce an intentional failure in `getDataPromise` and handle it with `.catch(...)` or `try/catch` around `await`.
- Convert the callback chain (`getDataCallback`) into Promises and compare readability.
- Measure timings with `console.time/timeEnd` around the Promise chain. fileciteturn1file0
