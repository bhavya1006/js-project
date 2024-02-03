# Projects

[Repo Link Here!](https://github.com/bhavya1006/js-project/tree/main)

# My-built-projects

## Project 1

```javascript
console.log('Hello World!');
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach( function (button) {
    // console.log(button);
    button.addEventListener('click',(event)=>{
        // console.log(event);
        // console.log(event.target.id);

        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        } else if (event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id;
        }
    })
})

```

---
## Project 2

```javascript
console.log("hello world");

```