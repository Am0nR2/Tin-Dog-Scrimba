
// Create the Dog class here


class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    getDogHTML(){
        return `
        <div class="container" id="container">
        <div class="header">
            <img src="./images/icon-profile.png" alt="">
            <img class="main-logo" src="./images/logo.png" alt="">
            <img src="./images/icon-chat.png" alt="">
        </div>
        <div class="image-area">
            <img src="${this.avatar}" alt="${this.name}">
            <div class="absolute-text">
                
                <h2>${this.name}, ${this.age}</h2>
                <p>${this.bio}</p>
                
            </div>
            <div id="badge-area" class="absolute-image">
                
            </div>
            
        </div>
        <div class="like-or-dislike" >
            <div class="btn" id="dislike-btn">
                
            </div>
            <div class="btn" id="like-btn">
              

            </div>
        </div>
    </div>
        `
    }
    pictureLiked(){
        document.getElementById("badge-area").innerHTML = `
            <img src="./images/badge-like.png" alt="">
        `
    }
    pictureDisliked(){
        document.getElementById("badge-area").innerHTML = `
            <img src="./images/badge-nope.png" alt="">
        `
    }
    pictureSwip(){
        this.hasBeenLiked ? this.pictureLiked() : this.pictureDisliked()
    }
}
export default Dog