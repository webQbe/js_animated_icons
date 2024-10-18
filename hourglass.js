// Hourglass Tip Animation

function hourglassFill(){

    let hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = "&#xf251;";
   
    // change icon in 1 sec
    setTimeout(function(){
   
       hourglass.innerHTML = "&#xf252;";
   
    }, 1000)
   
     // change icon in 2 sec
     setTimeout(function(){
   
       hourglass.innerHTML = "&#xf253;";
   
    }, 2000)

}

// Run Animation
hourglassFill();

// Repeat Animation every 3sec
setInterval(hourglassFill, 3000);







