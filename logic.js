//!This is the function to add the event listener to the hamburger menu for toggle,
//! but we add the onclick event to that menu item.
//? that's why this line is commented out.

// document.getElementById("parallel").addEventListener("click", onClickMenu);
function onClickMenu(){
    document.getElementById("hidden").classList.toggle("show");
    document.getElementById("parallel").classList.toggle("cross");
    document.body.classList.toggle("head");
    
}

//  function for open the alert box
function alert(){
    document.getElementById("alert").classList.add("alert");
    // document.body.classList.add("blur");
    document.getElementById("blur1").classList.add("blur");
    document.body.style.pointerEvents = "none";
    document.body.style.position = "fixed";
    document.getElementById("alert").style.pointerEvents = "auto";
}

//  function for close the alert box
function closse(){
    document.getElementById("alert").classList.remove("alert");
    document.body.classList.remove("blur");
    document.getElementById("blur1").classList.remove("blur");
    document.body.style.pointerEvents = "auto";
    document.body.style.position = "absolute";
}


//! ==============js code for changing the header bgcolor on scrolling==========
window.addEventListener("scroll", function(event){
    
    let scroll = this.scrollY;
   if(scroll > 1){
         document.getElementById("header").classList.add("header-bg");
   }
   else{
    document.getElementById("header").classList.remove("header-bg");
   }
});

//this function is for removing the rotateIn animation after one performance(that is 1s)
function rotateIn(){
    document.getElementById("bholu").classList.add("rotate_");
    //reomve the .rotate_  from #bholu after 1s
    setTimeout(() => {
        document.getElementById("bholu").classList.remove("rotate_");
    }, 1000);

}



