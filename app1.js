//dom manuplation 

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealfunc(){
    if(hiddenContent.classList.contains('hidden')){
        hiddenContent.classList.remove('hidden');
        console.log(0);
    }
    else{
        hiddenContent.classList.add('hidden');
    }
    console.log(1);
}

revealBtn.addEventListener('click', revealfunc);
