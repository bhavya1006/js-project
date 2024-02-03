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