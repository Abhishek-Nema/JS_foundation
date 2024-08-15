# Project 2 - BMI Index Calculator

## solution

```JavaScript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `height is invalid: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `weight is invalid: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    results.innerHTML = `Your BMI is ${bmi}`;

    if (bmi < 18.6) {
      results.innerHTML += `<br><span>You are BMI under weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML += `<br><span>Your BMI weight is normal</span>`;
    } else {
      results.innerHTML += `<br><span>Your BMI weight is over weight</span>`;
    }
  }
});


```