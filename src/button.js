let el=document.querySelector('iframe');

document.querySelector('.button__mobile').addEventListener('click',function(){
   let buttonMobile= document.querySelector('.button__mobile')
   let buttonDesktop= document.querySelector('.button__desktop')
   let container= document.querySelector('.iframe-container')
   let main= document.querySelector('.main')

//    let topDesktop=getComputedStyle(buttonDesktop);
//    let topMobile=getComputedStyle(buttonMobile);
   el.style.width='375px';
   
   main.style=`display:flex;
               flex-direction:row;`;
   container.style=`display:inline`;
   buttonMobile.style.top='77%';
   buttonDesktop.style.top='70%';
   console.log(buttonMobile)
   console.log(el)
});

document.querySelector('.button__desktop').addEventListener('click',function(){
    let container= document.querySelector('.iframe-container')
    let buttonMobile= document.querySelector('.button__mobile')
    let buttonDesktop= document.querySelector('.button__desktop')
    el.style.width='1440px'

    container.style=`display:none`;
    buttonMobile.style.top='70%';
    buttonDesktop.style.top='77%';
     console.log(el)
 });
