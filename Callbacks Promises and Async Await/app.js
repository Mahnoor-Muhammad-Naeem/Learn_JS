"use strict";

(function () {
  // 1) Simple logs
  console.log("one");
  console.log("two");
  console.log("three");

  // 2) setTimeout examples (short delays)
  const hello = () => console.log("hello");
  setTimeout(hello, 400);
  setTimeout(() => console.log("hello"), 800);

  // 3) Callbacks
  const sum = (a, b) => console.log(a + b);
  const calculator = (a, b, fn) => fn(a, b);
  calculator(1, 2, sum);
  calculator(1, 2, (a, b) => console.log(a + b));

  // 4) Nested if/loops
  const age = 19;
  if (age >= 18) {
    if (age >= 60) console.log("senior");
    else console.log("middle");
  } else {
    console.log("child");
  }

  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) str += j;
    console.log(i, str);
  }

  // 5) Async with callbacks
  function getDataCallback(id, next) {
    setTimeout(() => {
      console.log("data", id);
      if (typeof next === "function") next();
    }, 600);
  }

  console.log("getting data1....");
  getDataCallback(1, () => {
    console.log("getting data2 ....");
    getDataCallback(2, () => {
      console.log("getting data3 ....");
      getDataCallback(3);
    });
  });

  // 6) Promises (no rejections)
  const promise1 = new Promise((resolve) => {
    console.log("I am a promise");
    resolve("ok");
  }).then((v) => console.log("promise1 resolved with", v));

  const promise2 = new Promise((resolve) => {
    console.log("I am a promise");
    resolve(123);
  }).then((v) => console.log("promise2 resolved with", v));

  // 7) Promise chaining
  function getDataPromise(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("data", id);
        resolve("success");
      }, 600);
    });
  }

  getDataPromise(1).then((res) => console.log(res));
  getDataPromise(1)
    .then((res) => {
      console.log(res);
      return getDataPromise(2);
    })
    .then((res) => {
      console.log(res);
    });

  getDataPromise(1)
    .then(() => getDataPromise(2))
    .then(() => getDataPromise(3))
    .then((res) => console.log(res));

  // 8) Async/Await
  function api() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("weather data");
        resolve(200);
      }, 600);
    });
  }

  async function getWeatherData() {
    await api();
    await api();
  }
  getWeatherData();

  async function getAllData() {
    console.log("getting data1....");
    await getDataPromise(1);
    console.log("getting data2....");
    await getDataPromise(2);
    console.log("getting data3....");
    await getDataPromise(3);
  }
  getAllData();
})();
