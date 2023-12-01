const wordsArray=['Frontend Developer','UX/IX Designer', 'Web developer'];

function changeText(){
    const changeTextElement = document.getElementById('text')
    let currentIndex=0;

    setInterval(() =>{
        changingTextElement.textContent = wordsArray[currentIndex];
        currentIndex = (currentIndex + 1) % wordsArray.length;   
    }, 1000);
}
changeText();




var typed= new typed(".text", {
    Strings:["Frontend Developer","UX/IX Designer", "Web developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});