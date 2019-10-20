const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
const mobileCollapse=document.getElementsByClassName("description__mobile");
      for (let i = 0; i < mobileCollapse.length; i++) {
      mobileCollapse[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.maxHeight){
              content.style.maxHeight = null;
          } else {
          content.style.maxHeight = content.scrollHeight + "px";
         
          } 
      });
    }

function activeTouch(){
  const mobileCollapse=document.getElementsByClassName("description__mobile");                
  for (let i = 0; i < mobileCollapse.length; i++) {
      mobileCollapse[i].addEventListener("touchend", function() {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
          content.style.maxHeight = content.scrollHeight + "px";
          } 
      });
    }
}

const touchdetect=(el)=>{
  let surface = el;

  let startX = 0;
  let startY = 0;
  let distX = 0;

  surface.addEventListener('touchstart', function(e){
    if(e.target.classList.contains('description__mobile')){
      activeTouch();
    }
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    e.preventDefault(); 
  });
  surface.addEventListener('touchend', function(e){
      let touchObj = e.changedTouches[0];
      distX = touchObj.pageX - startX;
      distY = touchObj.pageY - startY;
      if(distX==0){
        activeTouch();
      }
      e.preventDefault();
  });
}
let el = document.querySelector('.carousel');
touchdetect(el);