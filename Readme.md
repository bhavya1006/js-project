# Projects

[Repo Link Here!](https://github.com/bhavya1006/js-project/tree/main)

### Preview

![Alt text](readme-imges/image.png)


# My-built-projects

## Project 1

### Preview
![Alt text](readme-imges/image-1.png)![Alt text](readme-imges/image-2.png)

### Code
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
### Preview
![Alt text](readme-imges/image-3.png)

### Code
```javascript
console.log("hello world");

// Default action happening

// const height = document.querySelector('#height')
// const weight = document.querySelector('#weight')
// const result = document.querySelector('#results')

// const button = document.querySelector('button')

// button.addEventListener('click',function (e) {
//     return result.appendChild(document.createTextNode(weight.value/(height.value**2)));
// })


// Default not action happening as we are taking submitted value
const form = document.querySelector('form');

// after pressing the value would be empty value
// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', function(e){
    e.preventDefault();

    // here the event is for submission, so value will be submitted
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')
    const output = document.querySelector('#output')

    if (height === '' || height<=0 || 
    // height != NaN not a better technique
    // better technique
    isNaN(height)
    ) {
        result.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight<=0 || 
    // weight != NaN not a better technique
    // better technique
    isNaN(weight)
    ) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height**2)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`

        // assignment done
        
        if (bmi<18.6) {
            output.innerHTML = `<span>Under Weight</span>`
        } else if (bmi>= 18.6 && bmi <= 24.9) {
            output.innerHTML = `<span>Normal Range</span>`
        } else if (bmi>24.9){
            output.innerHTML = `<span>Over Weight</span>`
        } else {
            output.innerHTML = ``
        }
    }

})
```

## Project 3
### Preview
![Alt text](readme-imges/image-4.png)

### Code
```javascript
console.log("Hello World!");
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    
    clock.innerHTML = date.toLocaleTimeString();
},1000)

```