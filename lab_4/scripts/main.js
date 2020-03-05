

let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc == 'lab_4/firefox.jpg'){
        myImage.setAttribute('src', 'lab_4/firfoximage.jpg');
    } else{
        myImage.setAttribute('src','lab_4/firefox.jpg');
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