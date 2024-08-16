const clock = document.getElementById('clock');

setInterval(function () {
  const latestDate = new Date();
  clock.innerHTML = latestDate.toLocaleTimeString();
  // console.log(latestDate.toLocaleTimeString())   // just for testing purpose
}, 1000);
