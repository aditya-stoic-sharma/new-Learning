let openBtn = document.querySelector('.open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.querySelector('.close-btn');

// console.log(openBtn);
// console.log(modalContainer);
// console.log(closeBtn);

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});
closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});

window.addEventListener(
    'click', function(e){
        if(e.target === modalContainer){
            modalContainer.style.display = 'none';
        }
    }
);