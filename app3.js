// dom manuplation 
// event delegation

// It allows users to append a SINGLE event eventlistner 
// to a parent element that adds it to all of its 
// present AND future descendants that match a selector



// document.querySelector('#football').addEventListener(
//     'click', function(e){
//         console.log("football is clicked!");
//         const target = e.target;
//         if(target.matches('li')){
//             target.style.backgroundColor = 'lightgrey';
//         }
// })

document.querySelector('.sports').addEventListener(
    'click', function(e){
        console.log(e.target.getAttribute('id') + ' is clicked');
        const target = e.target;
        if(target.matches('li')){
            target.style.backgroundColor = 'lightgrey';
        }
    }
)

const sports = document.querySelector('#sports');
const newsport = document.createElement('li');


newsport.innerText = 'rugby';
newsport.setAttribute('id', 'rugby');

sports.appendChild(newsport);