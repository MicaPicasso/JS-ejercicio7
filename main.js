const buttonAdd= document.querySelectorAll(".button-add")
const buttonRemove= document.querySelectorAll(".button-remove")
const description= document.querySelectorAll(".content")

console.log(buttonAdd);

buttonAdd[0].addEventListener("click", function(){
    buttonAdd[0].classList.add("close-button")
    buttonRemove[0].classList.remove("close-button")
    description[0].classList.remove("close-description")
})
    

buttonRemove[0].addEventListener("click", function(){
            buttonRemove[0].classList.add("close-button")
            buttonAdd[0].classList.remove("close-button")
            description[0].classList.add("close-description")
});

buttonAdd[1].addEventListener("click", function(){
    buttonAdd[1].classList.add("close-button")
    buttonRemove[1].classList.remove("close-button")
    description[1].classList.remove("close-description")
});


buttonRemove[1].addEventListener("click", function(){
    buttonRemove[1].classList.add("close-button")
    buttonAdd[1].classList.remove("close-button")
    description[1].classList.add("close-description")
});

buttonAdd[2].addEventListener("click", function(){
    buttonAdd[2].classList.add("close-button")
    buttonRemove[2].classList.remove("close-button")
    description[2].classList.remove("close-description")
});


buttonRemove[2].addEventListener("click", function(){
    buttonRemove[2].classList.add("close-button")
    buttonAdd[2].classList.remove("close-button")
    description[2].classList.add("close-description")
});



    

