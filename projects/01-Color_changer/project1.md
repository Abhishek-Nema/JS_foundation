# Project 1 - Color Changer

## solution

```JavaScript

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (btnColour) {
    btnColour.addEventListener('click', function (e) {
        // console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    });
});


```