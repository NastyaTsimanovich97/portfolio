let el=document.querySelector('iframe');

document.querySelector('.theyalow-button__mobile').addEventListener('click',function(){
    let buttonMobile= document.querySelector('.theyalow-button__mobile')
    let buttonDesktop= document.querySelector('.theyalow-button__desktop')
    let container= document.querySelector('.iframe-container')
    let main= document.querySelector('.main')
 

    el.style.width='650px';
    el.style.height='658px';
    
    main.style=`display:flex;
                flex-direction:row;`;
    container.style=`display: inline;
                        width: 29vw`;
    buttonMobile.style.top='77%';
    buttonDesktop.style.top='70%';
    console.log(buttonMobile)
    console.log(el)
 });
 document.querySelector('.theyalow-button__desktop').addEventListener('click',function(){
    let container= document.querySelector('.iframe-container')
    let buttonMobile= document.querySelector('.theyalow-button__mobile')
    let buttonDesktop= document.querySelector('.theyalow-button__desktop')
    el.style.width='1440px'

    container.style=`display:none`;
    buttonMobile.style.top='70%';
    buttonDesktop.style.top='77%';
     console.log(el)
 });