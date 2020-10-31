const showSpecificImage = (image) => {
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    
    exitButton.style.left = "90%";
    exitButton.style.opacity = "100%";

    specificImage.src = image

    exitButton.style.width = "50px";
    exitButton.style.height = "50px";
}

overlay = document.getElementById('overlay')
specificImage = document.getElementById('specific-image')
exitButton = document.getElementById('exit-image-button')

pictureMain = document.getElementsByClassName('design-div-main-image')
pictureTwo = document.getElementsByClassName('design-div-image-2')
pictureThree = document.getElementsByClassName('design-div-image-3')
pictureFour = document.getElementsByClassName('design-div-image-4')
pictureFive = document.getElementsByClassName('design-div-image-5')

for (let i=0;i<pictureMain.length;i++) {
    pictureMain[i].addEventListener('click', ()=>{
        showSpecificImage(pictureMain[i].src)
    })
}

for (let i=0;i<pictureTwo.length;i++) {
    pictureTwo[i].addEventListener('click', ()=>{
        showSpecificImage(pictureTwo[i].src)
    })
}

for (let i=0;i<pictureThree.length;i++) {
    pictureThree[i].addEventListener('click', ()=>{
        showSpecificImage(pictureThree[i].src)
    })
}

for (let i=0;i<pictureFour.length;i++) {
    pictureFour[i].addEventListener('click', ()=>{
        showSpecificImage(pictureFour[i].src)
    })
}

for (let i=0;i<pictureFive.length;i++) {
    pictureFive[i].addEventListener('click', ()=>{
        showSpecificImage(pictureFive[i].src)
    })
}

exitButton.addEventListener('click', ()=>{
    overlay.style.width = "0%";
    overlay.style.height = "0%";
    exitButton.style.width = "0px";
    exitButton.style.height = "0px";

    exitButton.style.opacity = "0%";
})