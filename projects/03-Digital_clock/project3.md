# Project 3 - Digital Clock

## solution

```JavaScript
const clock = document.getElementById('clock');

setInterval(function () {
  const latestDate = new Date();
  clock.innerHTML = latestDate.toLocaleTimeString();
  // console.log(latestDate.toLocaleTimeString())   // console.log is just for testing purpose
}, 1000);

```