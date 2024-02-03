// generate a random color

const randomColor = function() {
    const hex = '123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 15)];
    }
    console.log(color);
    return color;
};

// My code

document.querySelector('#start').addEventListener('click',function(){
    let intervalId = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)

    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(intervalId);
    })
},false)


// chai aur code's code

// let intervalId;

// const startChangingColor = function(){
//     // console.log('no issue');
//     if (!intervalId){
//         intervalId = setInterval(changBgColor,1000);
//     }

//     function changBgColor(){
//         document.body.style.backgroundColor = randomColor();
//     }
// };
// const stopChangingColor = function(){
//     clearInterval(intervalId);
//     intervalId = null;
// };

// document.querySelector('#start').addEventListener('click',startChangingColor,false)
// document.querySelector('#stop').addEventListener('click',stopChangingColor)