const button = document.getElementById('showHideButton')
const container = document.getElementsByClassName('container')[0];
button.addEventListener('click',() => {
    if(container.style.display == 'block'){
        container.style.display= 'none'
        button.innerText='Show Card'
        button.style.backgroundColor='red'
    }
    else{
        container.style.display = 'block'
        button.innerText='Hide Card'
        button.style.backgroundColor='green'

    }
})