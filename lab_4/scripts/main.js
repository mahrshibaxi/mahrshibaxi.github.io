

let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc == 'images/firefox.jpg'){
        myImage.setAttribute('src', 'images/firefox.jpg')  
    } else{
        myImage.setAttribute('src','images/firefox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function myUserName(){
    let myName= prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool' + myName;
    
}

if(!localStorage.getItem('name')){
    setUsername();
} else{
    let storedName = localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Mozilla is cool' + myName;

}