import dogs from "./data.js"
import Dog from "./Dog.js"
// Remember to import the data and Dog class!

let isWaiting = false

let ImageNumber = dogs.length 
let currentDog 
const render = () => document.body.innerHTML = currentDog.getDogHTML()

bringNewImage()
render()
const likedDogs = []
document.body.addEventListener("click", function(e){
    if(e.target.id === "like-btn"){
        
        if(!isWaiting){
            isWaiting = true
            setTimeout(()=> {
                bringNewImage() 
                isWaiting = false
            },1000)
            likedDogs.push(currentDog)
            currentDog.hasBeenLiked = true
            currentDog.pictureSwip()
        }
    }else if(e.target.id === "dislike-btn"){
        if(!isWaiting){
        isWaiting = true
        setTimeout(function(){
            bringNewImage()
            isWaiting = false
        },1000)
        currentDog.hasBeenLiked = false
        currentDog.pictureSwip()
        }
    }
})

function bringNewImage() {
    console.log(ImageNumber)    
    if(ImageNumber>=0){
            ImageNumber -= 1 
            currentDog = new Dog(dogs[ImageNumber])
            render()
        }

        if(ImageNumber<0){
            showLikedImages()
        }
}
function showLikedImages(){
    
    function getLikedDogHTML(){
        return likedDogs.map(function(dog){
            return `
            <div class="liked-pictures">
            <img class="img" src="${dog.avatar}">
            <div class="picture-card-info">
                <h3 class="img-info">${dog.name}</h3>
                <p class="img-info">${dog.bio}</p>
                
            </div>
            <img class="end-badge"src="./images/badge-like.png" alt="">
        </div>
            `
        })
    }
    
    
    
    document.getElementById("container").innerHTML = `
    <div class="header">
            <img src="./images/icon-profile.png" alt="">
            <img class="main-logo" src="./images/logo.png" alt="">
            <img src="./images/icon-chat.png" alt="">
        </div> 
        <div class="grid-area">
            <h2 class="title">It is over, You've seen al pictures...</h2>
            <h3 class="info">The Pictures, that you've liked are listed below</h3>
           
            ${getLikedDogHTML()}  
        </div>
    `
   
}